const Model = require("./model");


class EmployModel extends Model {
    async getAllList(req, res) {
        let sql = `SELECT * FROM employees`;
        return await this.querySQL(sql);
    }

    async findByName(name) {
        let sql = `SELECT * FROM employees WHERE name = '${name}'`;
        return await this.querySQL(sql);
    }

    async addEmployee(name, country, department, salary) {
        let sql = `INSERT INTO employees (name, country, department, salary) VALUES ('${name}', '${country}', '${department}', ${salary})`;
        return await this.querySQL(sql);
    }

    async deleteEmployee(name) {
        let sql = `DELETE FROM employees WHERE name = '${name}'`
        await this.querySQL(sql);
    }
}

module.exports = EmployModel;