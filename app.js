const express = require('express');
const path = require('path');
const routes = require('./src/routes');
<<<<<<< Updated upstream
=======
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override')
>>>>>>> Stashed changes
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.json());
<<<<<<< Updated upstream
app.use(express.static(path.join(__dirname, 'public')))
=======
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(cookieParser());
>>>>>>> Stashed changes

app.use('/', routes)

app.listen(3010, ()=> console.log('Sevidor rodando em localhost:3010'))
