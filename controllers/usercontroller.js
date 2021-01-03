require('dotenv').config();
const router = require('express').Router();
const User = require('../models/user');

router.post('/signup', function (req, res) {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        userType: req.body.userType
    })
        .then(
            res.send('This user has now signed up!')
        );
})

module.exports = router;