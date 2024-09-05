const express = require('express');
const router = express.Router();
const {register} = require('../controllers/user')
const { userValidation } = require('../middlewares/validationChain')

router
.post('/register', userValidation(), register)

module.exports = function(app) {
    app.use('/user', router);
};