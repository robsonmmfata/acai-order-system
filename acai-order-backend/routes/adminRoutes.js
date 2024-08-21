// routes/adminRoutes.js
const router = require('express').Router();
const Order = require('../models/Order');

router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find().populate('user').populate('acai');
    res.json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
