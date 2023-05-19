const express = require('express');
const cartRoutes = express.Router();
const cartController = require('../controllers/cartController');

cartRoutes.get('/product-cart', cartController.getCart);

cartRoutes.get('/cart', cartController.getCart2);

cartRoutes.get('/complete-purchase', cartController.getPurchase);

module.exports = cartRoutes;