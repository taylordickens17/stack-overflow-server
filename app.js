require('dotenv').config();
let express = require('express'); //import express (it's a framework)
let sequelize = require('./db');
let app = express(); //allows us to create an express app

let post = require('./controllers/postcontroller');
let user = require('./controllers/usercontroller');


sequelize.sync();

app.use(express.json());

app.use('/post', post); //routes us to post controller
app.use('/user', user);

app.listen(process.env.PORT, () => { //3000 is argument of port, function is callback
    console.log('App is listening on port 3000, gurl');
})