const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');

var playerController = require('./controllers/playerController.js');
var coachController = require('./controllers/coachController.js');
let app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));


app.use('/players', playerController);
app.use('/coaches', coachController);