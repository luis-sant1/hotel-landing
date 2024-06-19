const express = require('express');
const app = express();
require('dotenv').config();
require('./database/dbConnect');
const rooms = require('./routes/rooms');

const port = process.env.PORT || 3000;
express.json();
app.listen(port);

app.use('/rooms', rooms);

console.info("Server running at " + port);