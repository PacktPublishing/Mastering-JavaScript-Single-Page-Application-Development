var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/user');
var auth = require('../config/authorization');

module.exports = function(passport){

    passport.use('facebook', new FacebookStrategy({
            clientID: auth.facebookAuth.clientID,
            clientSecret: auth.facebookAuth.clientSecret,
            callbackURL: auth.facebookAuth.callbackURL,
            profileFields: ['id', 'displayName', 'email']
        },
        function(accessToken, refreshToken, profile, cb) {
            User.findOne({ 'facebook.id': profile.id }, function (err, user) {
                if(err){
                    return cb(err)
                } else if (user) {
                    return cb(null, user);
                } else {
                    for(key in profile){
                        if(profile.hasOwnProperty(key)){
                            console.log(key + " -> " + profile[key]);
                        }
                    }
                    var newUser = new User();
                    newUser.facebook.id = profile.id;
                    newUser.facebook.token = accessToken;
                    newUser.facebook.name = profile.displayName;
                    if(profile.emails){
                        newUser.email = profile.emails[0].value;
                    }

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