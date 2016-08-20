var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: 'Express-o', title:'Zarahion Tests Playground'});
});

module.exports = router;
