const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const reviewModel = Schema({
    review: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
})  

module.exports = mongoose.model("Reviews", reviewModel)