const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

// when a request comes in for trips, pass to controller
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode)
    .put(tripsController.tripsUpdateTrip);
    
module.exports = router;