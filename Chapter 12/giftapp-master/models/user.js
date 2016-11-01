var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    id: String,
    email: String,
    username: String,
    password: String,
    firstName: String,
    lastName: String,

    facebook: {
        name: String,
        id: String,
        token: String
    },

    twitter: {
        id: String,
        token: String,
        username: String,
        displayName: String
    }

});
module.exports = mongoose.model('User',userSchema);
