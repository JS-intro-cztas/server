const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const registrationsRouter = require('./routers/registrations');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/registration', registrationsRouter);

module.exports = app;

app.listen(3000, () => console.log('listening on port 3000'));
