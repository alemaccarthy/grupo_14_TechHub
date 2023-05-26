const express = require('express');
const productRoutes = express.Router();
const productController = require('../controllers/productsController');

// @Get /products

productRoutes.get('/detail', productController.getProductDetail);

productRoutes.get('/list', productController.getProductsList);

productRoutes.get('/create', productController.getCreateProduct);

module.exports = productRoutes;