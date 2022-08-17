const express = require('express');
const logoutController = require('../controllers/logoutControler');
const logoutRouter = express.Router();

logoutRouter.get('/logout', logoutController.logout);

module.exports = logoutRouter;