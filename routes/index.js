var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pixel_Ball' });
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
