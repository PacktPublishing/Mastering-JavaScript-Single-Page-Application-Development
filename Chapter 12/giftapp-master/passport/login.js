var LocalStrategy   = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/user');
var bCrypt = require('bcrypt-nodejs');
var auth = require('../config/authorization');

module.exports = function(passport){

    passport.use('login', new LocalStrategy({
            passReqToCallback : true
        },
        function(req, username, password, done) {

            User.findOne({ 'username' :  username },
                function(err, user) {
                    if (err)
                        return done(err);
                    if (!user){
                        // username not found
                        return done(null, false, req.flash('message', 'Username or password incorrect.'));
                    }

                    if (!bCrypt.compareSync(password, user.password)){
                        //password is invalid
                        return done(null, false, req.flash('message', 'Username or password incorrect.'));
                    }
                    //success condition
                    return done(null, user);
                }
            );

        })
    );

}
