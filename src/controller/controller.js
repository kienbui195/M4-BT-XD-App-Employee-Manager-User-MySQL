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
            await this.controller.addEmployee(req.body.name, req.body.country, req.body.department, req.body.salary)
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

    async showFormUpdate(req, res) {
        let id = req.query.id;
        let result = await this.controller.findById(id);
        res.render('update', {data: result[0]});
    }

    async updateInfo(req, res) {
        if (req.body.name && req.body.country && req.body.department && req.body.salary) {
            await this.controller.updateInfoEmployee(req.body.name, req.body.country, req.body.department, req.body.salary, req.body.id)
            res.redirect('/');
        } else {
            res.render('notFound');
        }
    }

    async uploadAvatar(req, res) {

            if(!req.files) {
                res.send({
                    status: false,
                    message: 'Không có file nào được upload'
                });
            } else {
                // Client sử dụng trường input file có name là "avatar"
                let avatar = req.files.img;

                // Sử dụng phương thức mv() để lưu file vào thư mục "uploads"
                avatar.mv('../public/images' + avatar.name);

                //trả về kết quả
                res.send({
                    status: true,
                    message: 'File đã được upload',
                    data: {
                        name: avatar.name,
                        mimetype: avatar.mimetype,
                        size: avatar.size
                    }
                });
            }
    }
}

module.exports = Controller;