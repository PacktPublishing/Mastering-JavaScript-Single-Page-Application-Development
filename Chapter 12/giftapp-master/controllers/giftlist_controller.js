var Giftlist = require('../models/giftlist');

exports.index = function(req, res){

        Giftlist.find({'user_id':req.user._id}, {}, function(err,giftlists){
            if(err){
                res.send(err);
            }else if(giftlists){
                res.json(giftlists);

            };
        });


};



exports.create = function(req, res){
    var newGiftlist = new Giftlist();
    newGiftlist.name = req.body.name;
    newGiftlist.user_id = req.user._id;

    var gifts = [];
    req.body.items.forEach(function(item){
        gifts.push({name:item});
    });
    newGiftlist.gifts = gifts;

    newGiftlist.save(function(err){
        if(err){
            throw err
        } else {
            res.json(newGiftlist);
        }
    });

};

exports.show = function(req, res){
    console.log(req.params.id);
    Giftlist.findOne({'_id':req.params.id}, function(err, list){
        if(req.params.format == "json" || req.isJSON){
            res.json(list);
        }else{
            res.render('giftlist/show',{giftlist:list});
        }
    });

};

exports.edit = function(req, res){

        if(req.params.format == "json" || req.isJSON){
            res.json({ "title":"edit giftlist", "giftlist":req.params.id })
        }else{
            res.send('<h1>edit giftlist' + req.params.id + '</h1>');
        }



};

exports.update = function(req, res){

        if(req.params.format == "json" || req.isJSON){
            res.json({ "title":"update giftlist", "giftlist":req.params.id })
        }else{
            res.send('<h1>update giftlist' + req.params.id + '</h1>');
        }


};

exports.destroy = function(req, res){

        if(req.params.format == "json" || req.isJSON){
            res.json({ "title":"delete giftlist", "giftlist":req.params.id })
        }else{
            res.send('<h1>delete giftlist' + req.params.id + '</h1>');
        }



};

exports.new = function(req, res){

    if(req.params.format == "json" || req.isJSON){
        res.json({"title":"new giftlist"})
    }else{
        res.send('<h1>new giftlist</h1>');
    }



};
