const express = require('express');
const categoriaRouter = express.Router()
const categoriaController = require('../controllers/categoriaController')
const multerConfig = require('../utils/multerConfig')

categoriaRouter.get('/categoria', categoriaController.getCategoryPage)
categoriaRouter.get('/categoria/admin', categoriaController.getCategoryAdminPage)


categoriaRouter.post('/categoria/admin/create', multerConfig.single('file'), categoriaController.create)

categoriaRouter.get('/categoria/:id', categoriaController.getById);

categoriaRouter.put('/categoria/admin/update/:id', categoriaController.update);

categoriaRouter.delete('/categoria/admin/delete/:id', categoriaController.delete);

module.exports = categoriaRouter;