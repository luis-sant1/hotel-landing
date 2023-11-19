const express = require('express')
const router = express.Router();
const {getAll, createRooms, roomAndReviews} = require('../controllers/roomsController')

router
// .get('/getRooms', getAll )
.get('/create', createRooms )
.get('/getRooms', roomAndReviews)

module.exports = router;