const {DataTypes} = require('sequelize');
const db = require('../db');

const Post = db.define('post', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        picUrl: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ""
        }
    })

module.exports = Post;
