const mongoose = require('mongoose');

// Define o esquema do modelo de assinante
const AssinanteSchema = new mongoose.Schema({
  codigo:{
    type: Number,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  sobrenome: {
    type: String,
    required: true,
  },
  dataNascimento: {
    type: Date,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  endereco: {
    type: String,
    required: true,
  },
  cidade: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['ativo', 'inativo'],
    required: true,
  },
});

// Cria o modelo de assinante com base no esquema
const Assinante = mongoose.model('Assinante', AssinanteSchema);

// Exporta o modelo de assinante
module.exports = Assinante;