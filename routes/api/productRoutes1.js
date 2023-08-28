const express = require('express');
const productRoutes = express.Router();
const productController = require('../../controllers/api/productController1');
const multer = require('multer');
const path = require('path');
const validations = require('../../middlewares/validations');


const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, './public/imgs/products-images');
    },
    filename: function (req, file, cb) {
        let filename = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, filename);
    }
});

const upload = multer({ storage });

// @Get /api/products/catalog
productRoutes.get('/catalog/:brand', productController.getProducts);

// @Get /api/products/catalog/apple/smartwatch
productRoutes.get('/catalog/:brand/:category', productController.getProducts);

// @GET /api/products/:id/detail
productRoutes.get('/:id/detail', productController.getProductDetail);

// @GET /api/products/create
productRoutes.get('/create', productController.getCreateProduct);

// @POST /api/products/create
productRoutes.post('/create', [upload.any('images'), validations.productsValidations], productController.createProduct);

// @DELETE /api/products/:id/delete

productRoutes.delete('/:id/delete', productController.deleteProduct);

// @GET /api/products/:id/update
productRoutes.get('/:id/update', productController.getUpdateProduct);

// @PUT /api/products/:id/update
productRoutes.put('/:id/update', [upload.any('images'), validations.productsValidations], productController.updateProduct);

module.exports = productRoutes;