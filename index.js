const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
app.set('view engine' , 'ejs');
app.set('views', path.join(__dirname, 'views'));
const bodyParser = require('body-parser');
const webRouter = require('./routers/web.router')

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use('/', webRouter);

app.listen(port, 'localhost', () => {
    console.log(`running at http://localhost:${port}`)
})
