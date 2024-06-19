const app = require('express');
const router = app.Router();
const {getAll, createRoom, getOne, deleteOne, updateOne} = require('../controllers/rooms');

router
.get('/all', getAll)
.post('/create', createRoom)
.get('/:id', getOne)
.delete('/remove/:id', deleteOne)
.put('/edit/:id', updateOne)
module.exports = router