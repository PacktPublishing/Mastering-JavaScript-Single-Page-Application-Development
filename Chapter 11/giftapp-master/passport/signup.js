var LocalStrategy   = require('passport-local').Strategy;
var User = require('../models/user');
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport){

    passport.use('signup', new LocalStrategy({
            passReqToCallback : true
        },
        function(req, username, password, done) {
            //this is asynchronous
            process.nextTick(function () {
                console.log('inside signup');
                // see if user already exists
                User.findOne({'username': username}, function (err, user) {
                    if (err) {
                        console.log('Error in SignUp: ' + err);
                        return done(err);
                    }
                    // user exists
                    if (user) {
                        console.log('User already exists');
                        return done(null, false, req.flash('message', 'User Already Exists'));
                    } else {
                        //create a new User and store to the database
                        var user = new User();

                        user.username = username;
                        user.email = req.param('email');
                        user.password = bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
                        user.firstName = req.param('firstName');
                        user.lastName = req.param('lastName');


                        user.save(function (err) {
                            if (err) {
                                console.log('save error ' + err);
                                throw err;
                            }
                            console.log("saving")
                            return done(null, user);
                        });
                    }
                });
            });

        })
    );




}
