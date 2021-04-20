const router = require('express').Router();
const Comment = require('../models');

router.post('/comment', function (req, res) {
    let { username, comment, picUrl } = req.body;

    Comment.create({
        username,
        comment,
        picUrl
    })
        .then(
            res.send('This user has now signed up!')
        );
})

module.exports = router;