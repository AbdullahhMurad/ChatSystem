const express = require("express");
const router = require('./router');
const bodyParser = require('body-parser');
const cors = require('cors');


// require('dotenv').config()
// This is used in the app.js instead

const config = require('./config/app')

const app = express();


app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(cors());

app.use(router);

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/uploads"));

const port = config.appPort;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)    
});


