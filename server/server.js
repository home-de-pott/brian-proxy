const express = require('express');
const app = express();
let { PORT } = require('../config');
const path = require('path');

PORT = PORT || 3005;
app.use(express.static(__dirname + '/../client/dist'));
app.use('/*', express.static(__dirname + '/../client/dist'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
