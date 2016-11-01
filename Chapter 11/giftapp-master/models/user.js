var mongoose = require('mongoose');

module.exports = mongoose.model('User',{
    id: String,
    email: String,
    username: String,
    password: String,
    firstName: String,
    lastName: String
});
