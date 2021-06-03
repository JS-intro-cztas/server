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

app.get('/contacts', (req, res) => {
    res.send(users);
});

module.exports = app;

app.listen(flags.port, () => console.log(`listening on port ${flags.port}`));


const users = 
[{
    "id": 1,
    "first_name": "Desi",
    "last_name": "Hoffman",
    "email": "dhoffman0@networkadvertising.org",
    "gender": "Female",
    "ip_address": "255.173.253.97"
  }, {
    "id": 2,
    "first_name": "Ayn",
    "last_name": "Lardner",
    "email": "alardner1@smh.com.au",
    "gender": "Female",
    "ip_address": "29.156.157.164"
  }, {
    "id": 3,
    "first_name": "Jude",
    "last_name": "Mensler",
    "email": "jmensler2@freewebs.com",
    "gender": "Female",
    "ip_address": "195.84.110.251"
  }, {
    "id": 4,
    "first_name": "Creight",
    "last_name": "Skill",
    "email": "cskill3@tumblr.com",
    "gender": "Female",
    "ip_address": "230.206.224.190"
  }, {
    "id": 5,
    "first_name": "Corabelle",
    "last_name": "Mabe",
    "email": "cmabe4@creativecommons.org",
    "gender": "Female",
    "ip_address": "61.103.223.145"
  }, {
    "id": 6,
    "first_name": "Winston",
    "last_name": "Rape",
    "email": "wrape5@delicious.com",
    "gender": "Female",
    "ip_address": "13.120.24.125"
  }, {
    "id": 7,
    "first_name": "Herbert",
    "last_name": "Towle",
    "email": "htowle6@phoca.cz",
    "gender": "Female",
    "ip_address": "244.75.242.13"
  }, {
    "id": 8,
    "first_name": "Dita",
    "last_name": "Skittles",
    "email": "dskittles7@eventbrite.com",
    "gender": "Female",
    "ip_address": "220.170.155.12"
  }, {
    "id": 9,
    "first_name": "Craig",
    "last_name": "Goodanew",
    "email": "cgoodanew8@youku.com",
    "gender": "Female",
    "ip_address": "104.227.152.147"
  }, {
    "id": 10,
    "first_name": "Gnni",
    "last_name": "Bordessa",
    "email": "gbordessa9@salon.com",
    "gender": "Male",
    "ip_address": "112.205.243.16"
  }];