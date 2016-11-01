var express = require('express');
var router = express.Router();

module.exports = function(passport){
        router.get('/facebook', passport.authenticate('facebook'));

        router.get('/FBcallback',
            passport.authenticate('facebook', { successRedirect: '/dash',
                    failureRedirect: '/login' }));

        return router;
}