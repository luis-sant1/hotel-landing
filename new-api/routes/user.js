const express = require('express');
const router = express.Router();

router
.get('/', (req, res) => {
    res.send('Hello world!');   
})

module.exports = function(app) {
    app.use('/user', router);
};