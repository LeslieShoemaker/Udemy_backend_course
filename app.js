const express = require('express');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const bodyParser = require('body-parser');
const rootDir = require("./utils/path");
const path = require("path");
const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

//a body-t feldolgozza (valahogy)
app.use(bodyParser.urlencoded({extended: false}));
//static fájlok elküldése
app.use(express.static(path.join(rootDir, 'public')));

//routing logic
app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);
app.use(errorController.get404Page);

app.listen(3000);

