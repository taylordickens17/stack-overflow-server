// The PostgreSQL is a database engine implementing SQL standards. It usually listen as a server on a network tcp port to provide its abilities.

// The pgAdmin is a sort of client. You are able to manipulate schema and data on an instance or multiple instances of PostgreSQL engines.

// The MS Windows installation package consists of both PostgreSQL server and PgAdmin client. So far right after the installation you are able to manage your databases.

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(() => console.log('The database is connected, gurl'))
    .catch((err => console.log(err)))

module.exports = sequelize;