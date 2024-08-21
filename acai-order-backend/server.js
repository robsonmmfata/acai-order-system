const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Stripe = require('stripe');

const app = express();
const PORT = process.env.PORT || 5000;

// Configuração do Stripe com a sua chave secreta
const stripe = Stripe('sua-chave-secreta-do-stripe');

// Middleware para permitir requisições CORS e parsing de JSON
app.use(cors());
app.use(express.json());

// Conexão com MongoDB
mongoose.connect('mongodb://localhost:27017/acai-order-system', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch((err) => {
  console.error('Erro ao conectar ao MongoDB:', err.message);
}); // Feita a alteração: adicionado par de chaves no final do bloco de conexão com MongoDB

// Importação de rotas
const orderRoutes = require('./routes/orderRoutes');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Usando as rotas de autenticação
app.use('/api/auth', authRoutes);

// Usando as rotas de pedidos
app.use('/api/orders', orderRoutes);

// Usando as rotas de administração
app.use('/api/admin', adminRoutes);
//complementei aqui
const path = require('path');

// Servir arquivos estáticos de uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Rota para processar pagamentos usando Stripe
app.post('/api/payment', async (req, res) => {
  const { amount, currency } = req.body; // Espera receber o valor e a moeda do frontend

  try {
    // Criar uma intenção de pagamento
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });
    
    // Responder com os detalhes da intenção de pagamento
    res.status(200).send(paymentIntent);
  } catch (error) {
    // Em caso de erro, responder com o status 500 e a mensagem de erro
    res.status(500).send({ error: error.message });
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});