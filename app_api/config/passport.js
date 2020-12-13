const passport = require('passport'); // bring in passport library
const LocalStrategy = require('passport-local').Strategy; // define using local strategy  
const mongoose = require('mongoose');   // mongoose library
const User = mongoose.model('users');   // user library

passport.use(new LocalStrategy({
        usernameField: 'email'          // use email address to define unique users
    },
    (username, password, done) => {     // call user findOne, pass in email
        User.findOne({ email: username }, (err, user) => {
            if (err) { return done(err); }          // if error return error
            if (!user) {                            // if no user returned, return wrong username
                return done(null, false, {
                    message: 'Incorrect username.'
                });
            }
            if (!user.validPassword(password)) {    // call into user object and call user pw
                return done(null, false, {          // take hashed pw, if true, return done
                    message: 'Incorrect password.'
                });
            }
            return done(null, user);
        });
    }
));