const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const registrationsRouter = require('./routers/registrations');
const args = require('args');

args.option('port', 'Port to run the webserver on', 3000);

const flags = args.parse(process.argv);
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/registration', registrationsRouter);

module.exports = app;

app.listen(flags.port, () => console.log(`listening on port ${flags.port}`));
