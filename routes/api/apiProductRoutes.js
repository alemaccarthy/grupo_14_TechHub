const express = require('express');
const apiProductsRoutes = express.Router();
const apiController = require('../../controllers/api/productController');

apiProductsRoutes.get('/', apiController.getAllProducts)

module.exports = apiProductsRoutes;