require('dotenv').config();
const router = require('express').Router();
const Post = require('../models/post');

router.get('/practice', function (req, res) {

    res.send('Hey, gurl. How you doin? This is a practice route')
})

module.exports = router;