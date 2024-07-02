const mongoose = require('mongoose');
const Room = new mongoose.Schema({
    title: String,
    description: String,
    price: String,
    image: {
        main: String,
        alt: Array
    },
    promo: String,
    modcon: String,
    modcon1: String,
    modcon2: String,
    modcon3: String,
},
    {
        timestamps: true,
        versionKey: false
    });

module.exports = mongoose.model('Room', Room);