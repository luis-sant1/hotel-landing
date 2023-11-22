const express = require('express')
const router = express.Router();
const {getAll, createRooms, roomAndReviews} = require('../controllers/roomsController')
const { upload } = require('../controllers/uploadController');

router
// .get('/getRooms', getAll )
.post('/create', upload.single("imagen"), createRooms )
.get('/getRooms', roomAndReviews)

module.exports = router;