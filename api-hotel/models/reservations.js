const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Reservation = new Schema ({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    entryDate: {
        type: Date,
        required: true,
        // select : false
    },
    exitDate: {
        type: Date,
        required: true,
        // select : false
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    room: {
        type: Array,
        defautl: [],
        require: true
    },
    check: {
        type: Boolean,
        default: false
    },
    role: {
        type: ["user", "admin"],
        default: "user"
    }
},
{
    timestamps : true,
    versionKey : false
})

module.exports =  mongoose.model('Reservations', Reservation);