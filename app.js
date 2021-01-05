require('dotenv').config();
let express = require('express'); //import express (it's a framework)
let sequelize = require('./db');
let app = express(); //allows us to create an express app

// let post = require('./controllers/postcontroller');
let user = require('./controllers/usercontroller');
let post = require('./controllers/postcontroller');
let comment = require('./controllers/commentcontroller');


sequelize.sync();

app.use(express.json());

app.use(require('./middleware/header'));
//app.use('/post', post); //routes us to post controller
app.use('/user', user);
const validateSession = require('./middleware/ValidateSession');
app.use('/post', validateSession, post);
app.use('/comment', validateSession, comment);

app.listen(process.env.PORT, () => console.log('App is listening on port 3000, gurl')); //3000 is argument of port, function is callback