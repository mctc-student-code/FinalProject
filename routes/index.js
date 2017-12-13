var express = require('express');
var router = express.Router();
var Score = require('../models/score');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pixel_Ball' });
});

/* POST to create new score in scoreboard */
router.post('/addScore', function(req, res, next) {
    var newscore = Score(req.body);

    newscore.save()
        .then( (doc) => {
          console.log(doc);
          res.redirect('/');
    })
    .catch( (err) => {

      if (err.name === 'ValidationError') {

        req.flash('error', err.message);
        res.redirect('/');
    }

    else {
        next(err);
    }

    });
});
/* GET singleplayer game. */
router.get('/sp', function(req, res, next) {
  res.render('singleplayer', { title: 'Pixel_Ball'});
});

/* GET multiplayer client page. */
router.get('/mpclient', function(req, res, next) {
  res.render('multiplayer', { title: 'Pixel_Ball Multiplayer'});
});

/* GET leaderboard */
router.get('/lb', function(req, res, next) {
  res.render('leaderboard', { title: 'Pixel_Ball Leaderboard'});
});

module.exports = router;
