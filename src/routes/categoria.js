const express = require('express');
const categoriaRouter = express.Router()
const categoriaController = require('../controllers/categoriaController')

categoriaRouter.get('/categoria', categoriaController.getCategoryPage)
categoriaRouter.get('/categoria/admin', categoriaController.getCategoryAdminPage)
module.exports = categoriaRouter