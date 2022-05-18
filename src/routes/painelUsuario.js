const express = require('express');
const usersRouter = express.Router()
const usersController = require('../controllers/painelController')

usersRouter.get('/users', usersController.getUsersPage)

module.exports = usersRouter