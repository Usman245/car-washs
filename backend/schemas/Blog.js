const mongoose = require('mongoose')

const blogSchama = new mongoose.Schema({
    title: {
        type: String
    },
    firstPara: {
        type: String
    },
    secondPara: {
        type: String
    },
    thirdPara: {
        type: String
    },
    url1: {
        type: String
    },
    url2: {
        type: String
    },
    url3: {
        type: String
    },
    date: {
        type: String,
        default: Date.now()
    }
})

module.exports = mongoose.model('Blog', blogSchama)