const express = require('express');
const detailsRouter = express.Router()
const detailsController = require('../controllers/detailsController')

detailsRouter.get('/detalhe', detailsController.getDetailsPage)

module.exports = detailsRouter