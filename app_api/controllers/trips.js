const mongoose = require('mongoose'); 
const model = mongoose.model('trips');          // import mongoose DB library & schema for use

// GET: /trips - list all the trips
const tripsList = async (req, res) => {         // callback method reg'd in the /api/trips/ route
    model   
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
    model
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

module.exports = {
    tripsList,
    tripsFindCode
};