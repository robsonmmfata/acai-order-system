// routes/orderRoutes.js
const Coupon = require('../models/Coupon');
const Order = require('../models/Order'); // Adicionei a importação do modelo Order

router.post('/orders', async (req, res) => {
  const { userId, acaiId, size, toppings, deliveryAddress, couponCode } = req.body;

  try {
    // Verifica e aplica o cupom se existir
    let discount = 0;
    if (couponCode) {
      const coupon = await Coupon.findOne({ code: couponCode });
      if (coupon && coupon.expirationDate > Date.now()) {
        discount = coupon.discount;
      } else {
        return res.status(400).json({ error: 'Cupom inválido ou expirado' });
      }
    }

    // Cria um novo pedido com os dados do corpo da requisição
    const order = new Order({
      user: userId,
      acai: acaiId,
      size,
      toppings,
      deliveryAddress,
      coupon: couponCode,
      // Aplica o desconto ao preço do pedido
      price: calculatePrice(size, toppings, discount) // Adicionei a chamada da função calculatePrice
    });

    // Salva o pedido no banco de dados
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Função para calcular o preço do pedido com desconto
function calculatePrice(size, toppings, discount) {
  // Lógica para calcular o preço do pedido com base no tamanho e toppings
  const price = size * toppings.length;
  // Aplica o desconto
  return price - (price * discount / 100);
}