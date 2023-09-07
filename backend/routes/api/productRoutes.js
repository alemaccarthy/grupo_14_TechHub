const express = require('express');
const apiProductsRoutes = express.Router();
const apiController = require('../../controllers/api/productController');

// @GET  /api/products
apiProductsRoutes.get('/', apiController.getAll)

// @GET /api/products/detail/:id
apiProductsRoutes.get('/:id/detail', apiController.getProductDetail);


module.exports = apiProductsRoutes;