const express = require('express');
const categoriaRouter = express.Router()
const categoriaController = require('../controllers/categoriaController')

categoriaRouter.get('/categoria', categoriaController.getCategoryPage)

module.exports = categoriaRouter