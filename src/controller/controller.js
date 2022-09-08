const EmployModel = require("../model/employModel");


class Controller {

    constructor() {
        this.controller = new EmployModel()
    }

    async showHome(req, res) {
        let data = await this.controller.getAllList(req, res);
        res.render('index', {data: data});
    }

    showCreate(req, res) {
        res.render('create');
    }

    async showDetail(req, res) {
        let name = req.query.name;
        let result = await this.controller.findByName(name);
        res.render('detail', {data: result[0]})
    }

    async getData(req, res) {
        if (req.body.name && req.body.country && req.body.department && req.body.salary) {
            this.controller.addEmployee(req.body.name, req.body.country, req.body.department, req.body.salary).catch(err => {
                console.log(err.message);
            });
            res.redirect('/');
        } else {
            res.render('notFound');
        }
    }

    deleteInfo(req, res) {
        let name = req.query.name;
        this.controller.deleteEmployee(name).catch(err => {
            console.log(err.message)
        })
        res.redirect('/');
    }
}

module.exports = Controller;