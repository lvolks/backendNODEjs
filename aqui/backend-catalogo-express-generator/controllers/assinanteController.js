const assinanteModel = require('../models/assinanteModel');

class AssinanteController {
    async salvar(req, res) {
        let assinante = req.body;
        const max = await assinanteModel.findOne({}).sort({ codigo: -1 });
        assinante.codigo = max == null ? 1 : max.codigo + 1;
        const resultado = await assinanteModel.create(assinante);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await assinanteModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorCodigo(req, res) {
        const codigo = req.params.codigo;
        const resultado = await assinanteModel.findOne({ 'codigo': codigo });
        res.status(200).json(resultado);
    }

    async atualizar(req, res) {
        const codigo = req.params.codigo;
        const _codigo = String((await assinanteModel.findOne({ 'codigo': codigo }))._id);
        await assinanteModel.findByIdAndUpdate(String(_codigo), req.body);
        res.status(200).send();
    }

    async excluir(req, res) {
        const codigo = req.params.codigo;
        const _codigo = String((await assinanteModel.findOne({ 'codigo': codigo }))._id);
        await assinanteModel.findByIdAndRemove(String(_codigo));
        res.status(200).send();
    }
}

module.exports = new AssinanteController();