const express = require('express');
const loginRouter = express.Router()
const loginController = require('../controllers/loginController')

loginRouter.get('/login', loginController.getLoginPage)
loginRouter.post('/login', loginController.loginUser)


module.exports = loginRouter