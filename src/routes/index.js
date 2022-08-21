const express = require('express');
const carrinhoRouter = require('./carrinho');
const categoriaRouter = require('./categoria');
// const detailsRouter = require('./details');
const finalizacaoRouter = require('./finalizacao');
const homeRouter = require('./home');
const loginRouter = require('./login');
const logoutRouter = require('./logout');
const usersRouter = require('./painelUsuario');
const orderRouter = require('./order');
const registerRouter = require('./register');
const routes = express.Router();
const auth = require('../middleware/autenticacao');

routes.get('/', homeRouter);

routes.get('/carrinho', auth, carrinhoRouter);

routes.get('/finalizacao', auth, finalizacaoRouter);

routes.get('/login', loginRouter)   
routes.get('/login/register', registerRouter);
routes.post('/login', loginRouter)
routes.post('/login/register', registerRouter);
routes.get('/logout', logoutRouter)

routes.get('/users', auth, usersRouter)
routes.post('/users', usersRouter)

routes.get('/users/data', auth, usersRouter)
routes.get('/users/data/add', auth, usersRouter)
routes.post('/users/data/create', auth, usersRouter)
routes.get('/users/data/delete/:id', auth, usersRouter)
routes.delete('/users/data/delete/:id', auth, usersRouter)
routes.get('/users/data/edit/:id', auth, usersRouter)
routes.put('/users/data/update/:id', auth, usersRouter)

routes.get('/users/credits', usersRouter)
routes.get('/users/address', auth, usersRouter)
routes.get('/users/address/add', auth, usersRouter)
routes.post('/users/address/create', usersRouter)
routes.get('/users/address/edit/:id', usersRouter)
routes.put('/users/address/update/:id', usersRouter)
routes.get('/users/requests', auth, orderRouter);
routes.get('/users/requests/details/:id', auth,  orderRouter);
routes.post('/carrinho', auth, orderRouter);
// routes.get('/users/requests',auth, usersRouter)
routes.get('/users/delete/:id', usersRouter)
routes.delete('/users/delete/:id', usersRouter)

routes.get('/categoria', auth, categoriaRouter)
routes.get('/categoria/search', auth, categoriaRouter)
routes.get('/categoria/admin', categoriaRouter)
routes.get('/categoria/admin/sucesso', categoriaRouter)
routes.post('/categoria/admin/create', categoriaRouter)
routes.get('/categoria/admin/create', categoriaRouter)

routes.get('/categoria/:id', categoriaRouter);

routes.get('/categoria/admin/editar/:id', categoriaRouter);
routes.put('/categoria/admin/update/:id', categoriaRouter);

routes.get('/categoria/admin/delete/:id', categoriaRouter);
routes.delete('/categoria/admin/delete/:id', categoriaRouter);

routes.get('/detalhe/:id', categoriaRouter);

module.exports = routes