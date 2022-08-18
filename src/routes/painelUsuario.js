const express = require('express');
const usersRouter = express.Router()
const usersController = require('../controllers/painelController')
const verifyIfUserIsLoggedIn = require('../middleware/checkCookies');



usersRouter.get('/users', usersController.getUsersPage)

usersRouter.get('/users/data', verifyIfUserIsLoggedIn, usersController.getUsersData)


usersRouter.get('/users/address', verifyIfUserIsLoggedIn, usersController.getUsersAddress)
usersRouter.post('/users/address/create', verifyIfUserIsLoggedIn, usersController.createAddress)
usersRouter.get('/users/address/edit/:id', verifyIfUserIsLoggedIn, usersController.editAddress)
usersRouter.put('/users/address/update/:id', verifyIfUserIsLoggedIn, usersController.updateAddress)
usersRouter.post('/users/credits', usersController.usersCredits)

usersRouter.get('/users/requests', verifyIfUserIsLoggedIn, usersController.usersRequests)


module.exports = usersRouter