const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/phone.js');
const app = express();

mongoose.connect('mongodb://docker.for.mac.host.internal:27017/capitoleConsulting')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Routes
app.use('/', routes);

//Static files
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
    console.log('Server run port', app.get('port'));
});