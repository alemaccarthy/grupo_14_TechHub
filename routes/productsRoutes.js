const express = require('express');
const productRoutes = express.Router();
const productController = require('../controllers/productsController');

// @Get /products
productRoutes.get('/', productController.getProducts);

// @GET /products/detail
productRoutes.get('/detail', productController.getProductDetail);

// @GET /products/create
productRoutes.get('/create', productController.getCreateProduct);

// @GET /products/update
productRoutes.get('/update', productController.getUpdateProduct);

module.exports = productRoutes;