const express = require('express');
const router = express.Router();
const assinanteController = require('../controllers/assinanteController');

router.get('/', assinanteController.listar);
router.post('/', assinanteController.salvar);
router.get('/:codigo', assinanteController.buscarPorCodigo);
router.put('/:codigo', assinanteController.atualizar);
router.delete('/:codigo', assinanteController.excluir);

module.exports = router;