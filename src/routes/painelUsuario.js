const express = require('express');
const usersRouter = express.Router()
const usersController = require('../controllers/painelController');
const registerController = require('../controllers/registerController');
const verifyIfUserIsLoggedIn = require('../middleware/checkCookies');



usersRouter.get('/users', usersController.getUsersPage)

usersRouter.get('/users/data', verifyIfUserIsLoggedIn, usersController.getUsersData)


usersRouter.get('/users/address', verifyIfUserIsLoggedIn, usersController.getUsersAddress)
usersRouter.post('/users/address/create', verifyIfUserIsLoggedIn, usersController.createAddress)
usersRouter.get('/users/address/edit/:id', verifyIfUserIsLoggedIn, usersController.editAddress)
usersRouter.put('/users/address/update/:id', verifyIfUserIsLoggedIn, usersController.updateAddress)
usersRouter.post('/users/credits', usersController.usersCredits)

usersRouter.get('/users/requests', verifyIfUserIsLoggedIn, usersController.usersRequests)

usersRouter.get('/users/delete/:id', verifyIfUserIsLoggedIn, registerController.delete);
usersRouter.delete('/users/delete/:id', verifyIfUserIsLoggedIn, registerController.destroy);

module.exports = usersRouter