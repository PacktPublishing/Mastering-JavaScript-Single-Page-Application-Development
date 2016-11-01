var express = require('express');
var router = express.Router();


module.exports = function(passport){


    router.get('/', function(req, res) {
        res.render('login/login', { message: req.flash('message'), csrfToken: req.csrfToken() });
    });


    router.post('/', passport.authenticate('login', {
        successRedirect: '/dash',
        failureRedirect: '/login',
        failureFlash : true
    }));


    router.get('/signup', function(req, res){
        console.log('signing up');
        res.render('login/signup',{message: req.flash('message'), csrfToken: req.csrfToken()});
    });


    router.post('/register', passport.authenticate('signup', {
        successRedirect: '/dash',
        failureRedirect: '/login/signup',
        failureFlash : true
    }));

    router.get('/signout', function(req, res) {
        req.logout();
        res.redirect('/login');
    });

    router.get('/facebook', passport.authenticate('facebook', {scope:['email']}));

    router.get('/FBcallback',
        passport.authenticate('facebook', { successRedirect: '/dash',
            failureRedirect: '/login' }));

    router.get('/twitter', passport.authenticate('twitter'));

    // handle the callback after twitter has authenticated the user
    router.get('/twitterCallback',
        passport.authenticate('twitter', {
            successRedirect : '/dash',
            failureRedirect : '/login'
        }));

    return router;
}
