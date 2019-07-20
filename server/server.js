const express = require('express');
const app = express();
let { PORT } = require('../config');
const path = require('path');

PORT = PORT || 3005;
app.use(express.static(__dirname + '/../client/dist'));
app.use('/*', express.static(__dirname + '/../client/dist'));
// app.use('/products/', express.static(__dirname + '/../client/dist'));
// app.use('/products/:id', express.static(__dirname + '/../client/dist'));

// app.get('/*', (req, res) => {
//   console.log('route hit');
//   res.sendFile(path.join(__dirname, '../client/dist/index.html'), err => {
//     if (err) {
//       res.status(500).send('Something went wrong');
//     }
//   });
// });

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
