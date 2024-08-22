const express = require('express');
const app = express();
require('dotenv').config();
require('./database/dbConnect');
const rooms = require('./routes/rooms');
const user = require('./routes/user');
const cors = require('cors');

const port = process.env.PORT || 3000;
app.use(express.json());
app.listen(port);

app.use(cors());
app.use('/rooms', rooms);
app.use('/user', user);

console.info("Server running at " + port);