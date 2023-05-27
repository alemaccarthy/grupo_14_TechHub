const express = require('express');
const productRoutes = express.Router();
const productController = require('../controllers/productsController');

// @Get /products
productRoutes.get('/', productController.getProductsList);

// @GET /products/detail
productRoutes.get('/detail', productController.getProductDetail);

// @GET /products/create
productRoutes.get('/create', productController.getCreateProduct);

module.exports = productRoutes;