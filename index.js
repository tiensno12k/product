const express = require('express')
const methodOverride = require('method-override')
const database = require("./config/database")
require("dotenv").config();
const bodyParser = require('body-parser') // dùng để đọc dữ liệu req.body

const systemConfig = require("./config/system")

const routeAdmin = require('./routes/admin/index.route'); //import routes dành cho admin
const route = require('./routes/client/index.route'); // import file routes 
const app = express()
const port = process.env.PORT;

app.use(methodOverride('_method')) // thư viện ghi đề phương thức PATCH 

app.use(bodyParser.urlencoded()) // body-parser

database.connect(); // liên kết database

// pug
app.set('views', './views');
app.set('view engine', 'pug');

// css, js
app.use(express.static('public'));

// App locals Variable
app.locals.prefixAdmin = systemConfig.prefixAdmin

routeAdmin(app)
route(app)

// này là để mở cổng port
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})