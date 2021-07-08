var express = require('express');
var router = express.Router();

var homepageController = funtion(req, res) {
  res.render('index', { title: 'Express'});
};

/* GET home page. */
router.get('/', homepageController);

module.exports = router;
