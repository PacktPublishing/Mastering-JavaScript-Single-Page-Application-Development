var express = require('express');
var router = express.Router();
var isAuthenticated = require('../utils/authenticated');

router.get('/', isAuthenticated, function(req, res, next) {


    var db = req.db;
    var collection = db.get('giftlist');
        console.log("routing dash for " + req.user._id);
    collection.find({'owner_id':req.user._id}, {}, function(err,giftlists){
        if(err){
            res.send(err);
        }else {
            giftlists = giftlists || [];
            res.render('dash/dashboard', {user: req.user, giftlists: giftlists});
        }
    });
});

module.exports = router;

