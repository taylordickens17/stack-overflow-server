require('dotenv').config();
let express = require('express'); //import express (it's a framework)
let app = express(); //allows us to create an express app
let sequelize = require('./db');

let post = require('./controllers/postcontroller');

sequelize.sync();

app.use('/post', post); //routes us to post controller

app.listen(3000, function () { //3000 is argument of port, function is callback
    console.log('App is listening on port 3000, gurl');
})