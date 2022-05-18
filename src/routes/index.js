const express = require('express');
const carrinhoRouter = require('./carrinho');
const categoriaRouter = require('./categoria');
const detailsRouter = require('./details');
const finalizacaoRouter = require('./finalizacao');
const homeRouter = require('./home');
const loginRouter = require('./login');
const usersRouter = require('./painelUsuario');
const routes = express.Router();

routes.get('/', homeRouter);

routes.get('/carrinho', carrinhoRouter);

routes.get('/finalizacao', finalizacaoRouter);

routes.get('/login', loginRouter)

routes.get('/users', usersRouter)

routes.get('/categoria', categoriaRouter)

routes.get('/detalhe', detailsRouter)

module.exports = routes