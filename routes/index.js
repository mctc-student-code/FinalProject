var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pixel_Ball' });
});

/* GET singleplayer game. */
router.get('/sp', function(req, res, next) {
  res.render('singleplayer', { title: 'Pixel_Ball SP'});
});

module.exports = router;
