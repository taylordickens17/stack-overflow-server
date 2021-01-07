const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

User.hasMany(Post);


module.exports = { User, Post, Comment };