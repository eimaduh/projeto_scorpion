const express = require('express');
const categoriaRouter = express.Router()
const categoriaController = require('../controllers/categoriaController')
const multerConfig = require('../utils/multerConfig')

categoriaRouter.get('/categoria', categoriaController.getCategoryPage)
categoriaRouter.get('/categoria/admin', categoriaController.getCategoryAdminPage)


categoriaRouter.get('/categoria/admin/create', categoriaController.add)
categoriaRouter.post('/categoria/admin/create', multerConfig.single('file'), categoriaController.create)

categoriaRouter.get('/detalhe/:id', categoriaController.getById);
categoriaRouter.get('/categoria/admin/sucesso', categoriaController.getSuccessPage);

categoriaRouter.get('/categoria/admin/editar/:id', categoriaController.edit);
categoriaRouter.put('/categoria/admin/update/:id', categoriaController.update);

categoriaRouter.get('/categoria/admin/delete/:id', categoriaController.delete);
categoriaRouter.delete('/categoria/admin/delete/:id', categoriaController.destroy);

module.exports = categoriaRouter;