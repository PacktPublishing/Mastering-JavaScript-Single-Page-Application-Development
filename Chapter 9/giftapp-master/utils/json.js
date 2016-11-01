var isJSON = function(req, res, next){
    if(req.xhr || req.headers['accepts'] == 'application/json'){
        req.isJSON = true;
    }
    next();
}

module.exports = isJSON;
