const app = require('express');
const router = app.Router();
const { getAll, createRoom, getOne, deleteOne, updateOne } = require('../controllers/rooms');
const upload = require('../middlewares/uploadImages');
const { roomValidation } = require('../middlewares/validationChain');

const fields = [{
    name: 'main', maxCount: 1
  }, {
    name: 'alts', maxCount: 5
  }];

router
    .get('/all', getAll)
    .post('/create', upload.fields(fields), roomValidation(), createRoom)
    .get('/:id', getOne)
    .delete('/remove/:id', deleteOne)
    .put('/edit/:id', updateOne)
module.exports = router