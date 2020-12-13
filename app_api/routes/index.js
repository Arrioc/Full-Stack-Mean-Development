const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({                      // injects middleware authentication key security features
    secret: process.env.JWT_SECRET,     // to proteect API routes from unauthenticated users, restricting calls
    userProperty: 'payload',
    algorithms: ['HS256']
 });

const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');

// when a request comes in for trips, pass to controller

router                                           // 'login' route/method calls auth control log in
    .route('/login')
    .post(authController.login);

router                                          // register route calls auth control register
    .route('/register')
    .post(authController.register);

router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(auth, tripsController.tripsAddTrip);  // authorize user first, if succeeds, then post to trips

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode)
    .put(auth, tripsController.tripsUpdateTrip); // authorize user first, if succeeds, then update to trips
    
module.exports = router;