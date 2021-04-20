require('dotenv').config();
let Express = require('express'); //import express (it's a framework)
let db = require('./db');
let app = Express(); //allows us to create an express app

// let post = require('./controllers/postcontroller');
const controllers = require('./controllers');
const { DataBrew } = require('aws-sdk');
app.use(Express.json());

app.use(require('./middleware/header'));

app.use("/post", controllers.postcontroller);
app.use("/comment", controllers.commentcontroller);
app.use("/user", controllers.usercontroller);

db.sync();

//this is just a note for me to fill out my dumb new years resolution

db.authenticate()
    .then(() => db.sync())
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`[Server]: App is listening on ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log(`[Server]: The app is broken here in app.js line 29!`)
        console.log(err);
    }) //3000 is argument of port, function is callback