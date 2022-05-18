const express = require('express');
const finalizacaoRouter = express.Router()
const finalizacaoController = require('../controllers/finalizacaoController')

finalizacaoRouter.get('/finalizacao', finalizacaoController.getFinishingPage)

module.exports = finalizacaoRouter