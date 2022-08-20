const express = require('express');
const orderRouter = express.Router()
const orderItemsController = require('../controllers/orderItemsController');
const verifyIfUserIsLoggedIn = require('../middleware/checkCookies');

const orderController = require('../controllers/orderController');


orderRouter.get('/users/requests', verifyIfUserIsLoggedIn, orderController.getAll);
orderRouter.get('/users/requests', verifyIfUserIsLoggedIn, orderItemsController.seeDetails);
orderRouter.post('/carrinho', verifyIfUserIsLoggedIn, orderController.createOrder);

module.exports = orderRouter;