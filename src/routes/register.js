const express = require('express');
const registerRouter = express.Router()
const registerController = require('../controllers/registerController')

registerRouter.get('/login/register', registerController.getRegistrationPage)

module.exports = registerRouter