const app = require('express');
const router = app.Router();
const {getAll, createRoom, getOne, deleteOne, updateOne} = require('../controllers/rooms');
const upload = require('../middlewares/uploadImages');

router
.get('/all', getAll)
.post('/create', upload.single("file"), createRoom)
.get('/:id', getOne)
.delete('/remove/:id', deleteOne)
.put('/edit/:id', updateOne)
module.exports = router