var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/location');
var ctrlOther = require('../controllers/other');

// Locations pages
router.get('/', ctrlLocations.homeList);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview)

// Other pages 
router.get('/about', ctrlOther.about);

module.exports = router;
