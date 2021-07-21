const mysql = require('mysql');

mysql.Promise = global.Promise;

const db = mysql.createConnection({
    host: process.env.DATABASE_host,
    user: process.env.DATABASE_User,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE

});







module.exports =  db ;