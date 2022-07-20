const express = require('express');
const loginRouter = express.Router()
const loginController = require('../controllers/loginController')

loginRouter.get('/login', loginController.getLoginPage)
loginRouter.get('/login/register', loginController.getRegistrationPage)

module.exports = loginRouter