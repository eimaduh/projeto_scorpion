const express = require('express');
const categoriaRouter = express.Router()
const categoriaController = require('../controllers/categoriaController')

categoriaRouter.get('/categoria', categoriaController.getCategoryPage)
categoriaRouter.get('/categoria/admin', categoriaController.getCategoryAdminPage)


categoriaRouter.post('/categoria/admin/create', categoriaController.create)

categoriaRouter.get('/categoria/:id', categoriaController.getById);

categoriaRouter.put('/categoria/admin/update/:id', categoriaController.update);

categoriaRouter.delete('/categoria/admin/delete/:id', categoriaController.delete);

module.exports = categoriaRouter;