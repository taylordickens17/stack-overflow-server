const { DataTypes } = require('sequelize'); //{DataTypes} is object deconstruction
const sequelize = require('../db');

const User = sequelize.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userType: {
        type: DataTypes.ENUM("Manager", "User"),
        defaultValue: "User"
    }
})

module.exports = User;