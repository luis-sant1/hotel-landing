const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
require('./database/dbConnect');
require('./routes')(app);
const cors = require('cors');

const port = process.env.PORT || 3000;
app.listen(port);

app.use(cors());

console.info("Server running at " + port);