let express = require('express');
let router = express.Router();

router.get('/practice', function (req, res) {
    res.send('Hey, gurl. How you doin? This is a practice route')
})

module.exports = router