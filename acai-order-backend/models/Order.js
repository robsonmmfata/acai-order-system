// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  acai: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Acai',
    required: true
  },
  size: {
    type: String,
    enum: ['small', 'medium', 'large'],
    required: true
  },
  toppings: [{
    type: String
  }],
  deliveryAddress: {
    type: String,
    required: true
  },
  coupon: {
    type: String,
    default: null
  },
  status: {
    type: String,
    enum: ['pending', 'preparing', 'out-for-delivery', 'delivered'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
