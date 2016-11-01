exports.index = function(req, res){

        var db = req.db;
        var collection = db.get('giftlist');

        collection.find({'owner_id':'566dd0cb1c09d090fd36ba83'}, {}, function(err,giftlists){
            if(err){
                res.send(err);
            }else if(giftlists){
                res.json(giftlists);

            };
        });


};

exports.new = function(req, res){
    exports.index = function(req, res){
        if(req.params.format == "json" || req.isJSON){
            res.json({"title":"new giftlist"})
        }else{
            res.send('<h1>new giftlist</h1>');
        }

    };

};

exports.create = function(req, res){
    exports.index = function(req, res){
        if(req.params.format == "json" || req.isJSON){
            res.json({"title":"create giftlist"})
        }else{
            res.send('<h1>create giftlist</h1>');
        }

    };

};

exports.show = function(req, res){
    exports.index = function(req, res){
        if(req.params.format == "json" || req.isJSON){
            res.json({ "title":"show giftlist", "giftlist":req.params.id })
        }else{
            res.send('<h1>show giftlist' + req.params.id + '</h1>');
        }

    };

};

exports.edit = function(req, res){
    exports.index = function(req, res){
        if(req.params.format == "json" || req.isJSON){
            res.json({ "title":"edit giftlist", "giftlist":req.params.id })
        }else{
            res.send('<h1>edit giftlist' + req.params.id + '</h1>');
        }

    };

};

exports.update = function(req, res){
    exports.index = function(req, res){
        if(req.params.format == "json" || req.isJSON){
            res.json({ "title":"update giftlist", "giftlist":req.params.id })
        }else{
            res.send('<h1>update giftlist' + req.params.id + '</h1>');
        }

    };

};

exports.destroy = function(req, res){
    exports.index = function(req, res){
        if(req.params.format == "json" || req.isJSON){
            res.json({ "title":"delete giftlist", "giftlist":req.params.id })
        }else{
            res.send('<h1>delete giftlist' + req.params.id + '</h1>');
        }

    };

};
