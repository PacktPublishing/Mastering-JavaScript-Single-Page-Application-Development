var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.param('id', function(req, res, next, id) {
    var db = req.db;
    var collection = db.get('giftlist');

    collection.find({'owner_id':id}, {}, function(err,giftlists){
        if(err){
            res.send(err);
        }else if(giftlists){
            req.giftlists = giftlists;
            collection = db.get('users');
            collection.findOne({"_id":id}, function(err, user){
                if(err){
                    res.send(err);
                } else {

                    req.user = user;
                    next();
                }

            });

        } else {
            res.send(new Error('User not found.'));
        }
    });
});

router.get('/:id', function(req, res, next){
    res.render('dash/dashboard', {user: req.user, giftlists: req.giftlists});
});

module.exports = router;

