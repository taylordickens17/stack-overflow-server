const router = require('express').Router();
const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {UniqueConstraintError} = require('sequelize/lib/errors');

//Signup
router.post('/signup', async (req, res) => {
    const { username, email, password, userType } = req.body.user;

    try {
       const newUser = await User.create({
            username,
            email,
            password: bcrypt.hashSync(password, 13),
            userType
        })
        const token = jwt.sign({
            id: newUser.id
        },
        process.env.JWT_SECRET,
        { expiresIn: 60 * 60 * 24 });

        res.status(201).json({
            message: "User was registered!",
            user: newUser,
            sessionToken: `Bearer ${token}`
        })
    } catch (error) {
        if (error instanceof UniqueConstraintError) {
            res.status(409).json({
                message: "This username or email is already in use"
            })
        } else {
            res.status(500).json({
                error: `Failed to register a user: ${error}`
            })
        }
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body.user;
    
    try {
        const loginUser = await User.findOne({
            where: {
                username: username
            }
        })
    } catch (error) {

    }
})
module.exports = router;