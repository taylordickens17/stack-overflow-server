require('dotenv').config();
const router = require('express').Router();
const User = require('../models/user');

router.post('/signup', function (req, res) {
    let { username, email, password, userType } = req.body;

    User.create({
        username,
        email,
        password,
        userType
    })
        .then(
            res.send('This user has now signed up!')
        );
})

module.exports = router;