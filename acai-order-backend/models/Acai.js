// models/Acai.js
const mongoose = require('mongoose');

const acaiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  priceSmall: {
    type: Number,
    required: true
  },
  priceMedium: {
    type: Number,
    required: true
  },
  priceLarge: {
    type: Number,
    required: true
  },
  toppings: [{
    type: String
  }],
  imageUrl: {
    type: String,
    required: true // Adicionando a URL da imagem como obrigatória
  }
});

const Acai = mongoose.model('Acai', acaiSchema);

module.exports = Acai;
