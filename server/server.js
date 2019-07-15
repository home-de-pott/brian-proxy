const express = require('express');
const app = express();
let { PORT } = require('../config');
// require('dotenv').config();
const axios = require('axios');

PORT = PORT || 3005;
app.use(express.static(__dirname + '/../client/dist'));
app.use('/products', express.static(__dirname + '/../client/dist'));
app.use('/products/:id', express.static(__dirname + '/../client/dist'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
