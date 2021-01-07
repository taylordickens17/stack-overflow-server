require('dotenv').config();
let express = require('express'); //import express (it's a framework)
let sequelize = require('./db');
let app = express(); //allows us to create an express app

// let post = require('./controllers/postcontroller');
const controllers = require('./controllers')
app.use(express.json());

app.use(require('./middleware/header'));

app.use("/post", controllers.postcontroller);
app.use("/comment", controllers.commentcontroller);
app.use("/user", controllers.user);

sequelize.sync();

//this is just a note for me to fill out my dumb new years resolution

app.listen(process.env.PORT, () => console.log('App is listening on port 3000, gurl')); //3000 is argument of port, function is callback