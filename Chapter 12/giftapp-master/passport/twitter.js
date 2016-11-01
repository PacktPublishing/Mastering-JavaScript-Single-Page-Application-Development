var TwitterStrategy = require('passport-twitter').Strategy;
var User = require('../models/user');
var auth = require('../config/authorization');

module.exports = function(passport){

    passport.use('twitter', new TwitterStrategy({
            consumerKey     : auth.twitterAuth.consumerKey,
            consumerSecret  : auth.twitterAuth.consumerSecret,
            callbackURL     : auth.twitterAuth.callbackURL
        },
        function(token, tokenSecret, profile, cb) {
            User.findOne({ 'twitter.id': profile.id }, function (err, user) {
                if(err){
                    return cb(err)
                } else if (user) {
                    return cb(null, user);
                } else {
                    // if there is no user, create them
                    var newUser                 = new User();

                    // set all of the user data that we need
                    newUser.twitter.id          = profile.id;
                    newUser.twitter.token       = token;
                    newUser.twitter.username    = profile.username;
                    newUser.twitter.displayName = profile.displayName;

                    newUser.save(function(err){
                        if(err){
                            throw err;
                        }else{
                            return cb(null, newUser);
                        }
                    });
                }
            });
        }
    ));
}