const router = require('express').Router();
const Model = require('../src/model/model');
const Controller = require('../src/controller/controller');
const multer = require('multer');
const upload = multer();

let controller = new Controller();

router.get('/' , (req, res) => {
    controller.showHome(req, res).catch(err => {
        console.log(err.message);
    })
})

router.get('/create', (req, res) => {
    controller.showCreate(req, res);
})

router.post('/create', upload.none(), (req, res) => {
    controller.getData(req, res).catch(err => {
        console.log(err.message)
    })
})

router.get('/details', (req, res) => {
    controller.showDetail(req, res).catch(err => {
        console.log(err.message);
    });
})

router.get('/delete', (req, res) => {
    controller.deleteInfo(req, res);
})

router.get('/update' , (req, res) => {
    controller.showFormUpdate(req, res).catch(err => {
        console.log(err.message)
    })
})

router.post('/update', upload.none(), (req, res) => {
    controller.updateInfo(req, res).catch(err => {
        console.log(err.message)
    })
})

router.post('/upload-avatar', (req, res) => {
    controller.uploadAvatar(req, res).catch(err => {
        console.log(err.message)
    })
})

module.exports = router;