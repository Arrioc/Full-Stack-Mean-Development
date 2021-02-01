const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

const register = (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({"message": "All fields required"});
    }

    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);
    user.save((err) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            const token = user.generateJwt();
            res
                .status(200)
                .json({token});
        }
    })
};

// Authenticate user: 
const login = (req, res) => {
    if (!req.body.email || !req.body.password) { // if no email or pw, 400 error
        return res
        .status(400)
        .json({"message": "All fields required"});
    }
    // when authenitcate gets called using local strat: pass in user, pulled out from jwt token lib
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res
                .status(404)                    // if error return 404
                .json(err);
        }
        if (user) {
            const token = user.generateJwt();   // if user, gen jwt token
            res
                .status(200)                    
                .json({token});                 // respond with 200, return token
        } else {
            res
                .status(401)                    // else return 401, not authorized error
                .json(info);
        }
    }) (req, res);
};

module.exports = {
    register,
    login
};