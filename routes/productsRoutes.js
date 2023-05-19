const express = require('express');
const productRoutes = express.Router();
const productController = require('../controllers/productsController');

productRoutes.get('/product-detail', productController.getProductDetail);

productRoutes.get('/products-list', productController.getProductsList);

productRoutes.get('/create-product', productController.getCreateProduct);

module.exports = productRoutes;