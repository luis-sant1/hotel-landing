const mongoose = require('mongoose');

const user = new mongoose.Schema({
    email: String,
    password: String,
    image: {
        main: String
    },
    name: String,
    surname: String
})

module.exports = mongoose.model('User', user)