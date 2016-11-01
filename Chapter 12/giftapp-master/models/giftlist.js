var mongoose = require('mongoose');

var giftlistSchema = mongoose.Schema({
    id: String,
    user_id: String,
    name: String,
    gifts: [{name: String}]

});
module.exports = mongoose.model('Giftlist',giftlistSchema);
