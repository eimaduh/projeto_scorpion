const express = require('express');
const carrinhoRouter = express.Router()
const carrinhoController = require('../controllers/carrinhoController')

carrinhoRouter.get('/carrinho', carrinhoController.getCartPage)

module.exports = carrinhoRouter