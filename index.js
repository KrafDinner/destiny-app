const express = require('express');
const app = express();
const path = require('path');

let clanController = require('./routes/clan');

app.use('/clan', clanController);

//This should be the last route defined
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

module.exports = app;