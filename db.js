// The PostgreSQL is a database engine implementing SQL standards. It usually listen as a server on a network tcp port to provide its abilities.

// The pgAdmin is a sort of client. You are able to manipulate schema and data on an instance or multiple instances of PostgreSQL engines.

// The MS Windows instalation package consists of both PostgreSQL server and PgAdmin client. So far right after the instalation you are able to manage your databases.

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(() => console.log('The database is connected, gurl'))
    .catch((err => console.log(err)))

// User = sequelize.import('./models/user.js');
// Post = sequelize.import('./models/post.js');
// Comment = sequelize.import('./models/comment.js');

// Post.belongsTo(User);
// Comment.belongsTo(User);

// Comment.belongsTo(Post);
// Post.hasMany(Comment);

// User.hasMany(Post);
// User.hasMany(Comment);

module.exports = sequelize;