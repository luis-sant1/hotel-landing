const express = require('express')
const router = express.Router();
const {create, getAll} = require('../controllers/reviewController')

router
.get('/create', create)
.get('/getAll', getAll)

module.exports = router