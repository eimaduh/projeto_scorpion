const express = require('express');
const path = require('path');
const routes = require('./src/routes');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes)

app.listen(3010, ()=> console.log('Sevidor rodando em localhost:3010'))
