
const DBConnect = require('./dbConnect')

class Model {
    constructor() {
        let db = new DBConnect()
        this.conn = db.connect();
    }

    querySQL(sql) {
        return new Promise((resolve, reject) => {
            this.conn.query(sql, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
        })
    }
}

module.exports = Model;