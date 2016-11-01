var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.param('id', function(req, res, next, id) {
    var db = req.db;
    var collection = db.get('users');
    collection.findOne({ "_id": id }, {}, function(err,User){
        if(err){
            res.send(err);
        }else if(User){
            req.user = User;
            next();
        } else {
            res.send(new Error('User not found.'));
        }
    });
});

router.get('/show/:id', function(req, res, next) {
        if(req.isJSON){
            User.appName = req.app.locals.appName;
            res.json(req.user);
        } else {
            res.render('users/user', {
                user: req.user,
                appName: req.app.locals.appName
            });
        }
});

router.get('/show', function(req, res, next) {
    var db = req.db;
    var collection = db.get('users');
    collection.find({}, {}, function(err,docs){
        if(!err){
            if(req.isJSON){
                res.send(docs);
            } else {
                res.render('users/show', {
                    users: docs,
                    appName: req.app.locals.appName
                });
            }
        }else{
            res.send('error');
        }
    });
});

module.exports = router;
