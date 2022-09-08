const mysql = require('mysql');

class DBConnect {
    connect() {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Abcd1234',
            port: 3306,
            database: 'dbtest'
        })
    }
}

module.exports = DBConnect;