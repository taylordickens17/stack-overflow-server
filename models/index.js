const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

User.hasMany(Post);
User.hasMany(Comment);

Post.belongsTo(User);
Comment.belongsTo(User);

Comment.belongsTo(Post);
Post.hasMany(Comment);


module.exports = { User, Post, Comment };