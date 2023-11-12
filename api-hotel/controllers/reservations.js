const Reservation = require('../models/reservations')
const {validateReservation} = require('../validators/reservations')
const createReservation = async (req, res) => {
    try {
        const  {body} = req
        const { name, lastName, email, entryDate, exitDate, address, check, room, phone } = body
        const newReservation = new Reservation({
            name,
            lastName,
            email,
            entryDate,
            exitDate,
            phone,
            address,
            room,
            check,
        })
        console.log(newReservation)
        const reservationSaved = await newReservation.save()
        res.status(200).json({
            reservation: reservationSaved
        })
    } catch (error) {
        console.log("Error de la reservación " +error)
        res.status(500).json({ error: ["Hubo un error al crear reservación"] })
    }
}

module.exports = { createReservation }