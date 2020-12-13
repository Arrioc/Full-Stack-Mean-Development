const mongoose = require('mongoose'); 
const Trip = mongoose.model('trips');          // import mongoose DB library & schema for use
const User = mongoose.model('users');

// GET: /trips - list all the trips
const tripsList = async (req, res) => {         // callback method reg'd in the /api/trips/ route
    Trip   
        .find({})                               // use mongoose .find() with no filter criteria to return all instances
        .exec((err, trips) => {
            if (!trips) {
                return res                      // if nothing returned send an HTTP 404 status
                    .status(404)
                    .json({ "message": "trip not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res                      // if data retrieved/found, send to client with HTTP 200 status
                    .status(200)
                    .json(trips);
            }
        });
};

// GET: /trips/:tripCode - returns a single trip using trip code as criteria
const tripsFindCode = async (req, res) => {     // Callback method registered in the /api/trips/{tripCode} route
    Trip
        .find({ 'code': req.params.tripCode })  // Use the mongoose .find() method with a filter set to the tripCode passed on the URL
        .exec((err, trip) => {
            if (!trip) {
                return res                      // if nothing returned send an HTTP 404 status
                    .status(404)
                    .json({ "message": "trip not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res                      // if data retrieved/found, send to client with HTTP 200 status
                    .status(200)
                    .json(trip);
            }
        });
};

// POST: /trips - create/add new trip
const tripsAddTrip = async (req, res) => {
    //console.log('tripsAddTrip invoked with:\n' + req.body);
    getUser(req, res,
        (req, res) => {             // Authenticate user first, call creat trip if successful
    Trip
        .create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        },
            (err, trip) => {
                if (err) {
                    return res
                        .status(400) // bad request, invalid content
                        .json(err);
                } else {
                    return res
                        .status(201) // created
                        .json(trip);
                }
            });
        }
    )
}

// PUT: /trips/:tripCode - Edit existing trip
const tripsUpdateTrip = async (req, res) => {
    console.log(req.body);
    getUser(req, res,
        (req, res) => {             // Authenticate user first, call update trip if successful
    Trip
        .findOneAndUpdate({ 'code': req.params.tripCode }, {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }, { new: true })
        .then(trip => {
            if (!trip) {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            res.send(trip);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            return res
                .status(500) // server error
                .json(err);
        });
    }
    )
}

// get user method - 
const getUser = (req, res, callback) => {
    if (req.payload && req.payload.email) {                 // Verify that request has payload value, & that payload contains an email
        User
            .findOne({ email: req.payload.email })          // mongoose findOne method to find a user using the given email
            .exec((err, user) => {
                if (!user) {                                
                    return res
                        .status(404)
                        .json({ "message": "User not found" });
                } else if (err) {
                    console.log(err);
                    return res
                        .status(404)
                        .json(err);
                }
                callback(req, res, user.name);              // if email was found, return user
            });
    } else {                                                // if not user, no user found with that email
        return res
            .status(404)
            .json({ "message": "User not found" });
    }
};

module.exports = {
    tripsList,
    tripsFindCode,
    tripsAddTrip,
    tripsUpdateTrip, 
    getUser
};