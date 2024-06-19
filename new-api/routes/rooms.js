const app = require('express');
const router = app.Router();
const {getAll} = require('../controllers/rooms')

router.get('/all', getAll)

module.exports = router