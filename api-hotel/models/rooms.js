const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const roomModel = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
    imagen: {
        type: Object,
        public_id: String,
        secure_url: String,
        default: null
    },
    review: {
        type: Array,
        default: []
    },
    promo:{
        type: String,
    },
    modcons: {
        type: Array,
        default: []
    }
},
    {
        timestamps: true,
        versionKey: false
    })

    module.exports = mongoose.model('Rooms', roomModel);