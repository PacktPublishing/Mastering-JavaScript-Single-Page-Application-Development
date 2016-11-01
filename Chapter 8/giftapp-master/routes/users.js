var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/show', function(req, res, next) {
    var db = req.db;
    var collection = db.get('users');
    collection.find({}, {}, function(err,docs){
        if(!err){
            //res.json(docs);
            res.render('users/show', { users: docs });
        }else{
            res.send('error');
        }
    });
});

module.exports = router;
