const express = require('express');
const path = require('path');
const routes = require('./src/routes');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const sessionParser = require('express-session');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(sessionParser({ 
    secret: '_Scorpion@Tabacaria_', 
    resave: true, 
    saveUninitialized: true 
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', routes)

app.listen(3010, ()=> console.log('Servidor rodando em localhost:3010'))
