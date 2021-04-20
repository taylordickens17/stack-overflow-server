const {DataTypes} = require('sequelize');
const db = require('../db');

const Comment = db.define('post', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        picUrl: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ""
        }
    })

module.exports = Comment;