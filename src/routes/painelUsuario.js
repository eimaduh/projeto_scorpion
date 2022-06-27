const express = require('express');
const usersRouter = express.Router()
const usersController = require('../controllers/painelController')

usersRouter.get('/users', usersController.getUsersPage)
usersRouter.get('/users/data', usersController.getUsersData)

usersRouter.get('/users/address', usersController.getUsersAddress)
usersRouter.get('/users/address/edit', usersController.editAddress)

usersRouter.get('/users/credits', usersController.usersCredits)


module.exports = usersRouter