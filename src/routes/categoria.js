const express = require('express');
const categoriaRouter = express.Router()
const categoriaController = require('../controllers/categoriaController')

categoriaRouter.get('/categoria', categoriaController.getCategoryPage)
categoriaRouter.get('/categoria/admin', categoriaController.getCategoryAdminPage)
categoriaRouter.post('/categoria/admin', categoriaController.create)
module.exports = categoriaRouter