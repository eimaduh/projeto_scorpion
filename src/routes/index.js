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
routes.get('/login/register', loginRouter);

routes.get('/users', usersRouter)
routes.post('/users', usersRouter)
routes.get('/users/data', usersRouter)
routes.get('/users/credits', usersRouter)
routes.get('/users/address', usersRouter)
routes.get('/users/address/edit', usersRouter)
routes.get('/users/requests', usersRouter)

routes.get('/categoria', categoriaRouter)
routes.get('/categoria/admin', categoriaRouter)
routes.post('/categoria/admin/create', categoriaRouter)


routes.get('/categoria/:id', categoriaRouter);

routes.put('/categoria/admin/update/:id', categoriaRouter);

// routes.delete('/categoria/admin/delete/:id', categoriaRouter);

routes.get('/detalhe', detailsRouter)

module.exports = routes