
const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    name: String,
    gender: String,
    company: String,
    email: String,
    phone: String,
    address: String,
    
})

// Model export
module.exports = mongoose.model('Users', UserSchema);