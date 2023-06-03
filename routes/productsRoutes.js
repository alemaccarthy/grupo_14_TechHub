const express = require('express');
const productRoutes = express.Router();
const productController = require('../controllers/productsController');

// @Get /products
productRoutes.get('/', productController.getProducts);

// @GET /products/detail
productRoutes.get('/:id/detail', productController.getProductDetail);

// @GET /products/create
productRoutes.get('/:id/create', productController.getCreateProduct);

// @POST /products/create
productRoutes.post('/create', productController.postProduct);

// @DELETE /products/update

productRoutes.delete('/:id/delete', productController.deleteProduct)

// @GET /products/update
productRoutes.get('/update', productController.getUpdateProduct);

// @POST /products/update
productRoutes.put('/:id/update', productController.updateProduct)

module.exports = productRoutes;