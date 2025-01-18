const mongoose = require('mongoose')

const userSchama = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    refreshToken: {
        type: String
    }
})

module.exports = mongoose.model('User', userSchama)