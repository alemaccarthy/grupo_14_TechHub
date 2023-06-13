const express = require('express');
const productRoutes = express.Router();
const productController = require('../controllers/productsController');
const multer = require('multer');
const path = require('path');
const { body } = require('express-validator');

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

const validations = [
    body('title').notEmpty().withMessage('El titulo no puede estar vacio'),
    body('brand').notEmpty().withMessage('La marca no puede estar vacia'),
    body('description').notEmpty().withMessage('Debes darle una descripcion al producto'),
    body('currency').notEmpty().withMessage('Debes elegir una moneda para expresar el precio del producto'),
    body('price').notEmpty().withMessage('Debes asignar un precio al producto'),
    body('category').notEmpty().withMessage('Debes seleccionar una categoria para el producto'),
    body('colors').notEmpty().withMessage('Debes seleccionar la cantidad de colores disponibles'),
    body('images').custom((value, { req }) => {
        let files = req.file;
        // console.log(files);
        let acceptedExtensions = ['.jpg', '.png', '.jpeg'];
        let fileExtension = path.extname(files.originalname);

        if (!files) {
            throw new Error('Debes subir una imagen del producto');
        }

        if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
        }
        return true;
    })
]

// @Get /products
productRoutes.get('/', productController.getProducts);

// @GET /products/:id/detail
productRoutes.get('/:id/detail', productController.getProductDetail);

// @GET /products/create
productRoutes.get('/create', productController.getCreateProduct);

// @POST /products/create
productRoutes.post('/create', [upload.single('images'), validations], productController.postProduct);

// @DELETE /products/:id/delete

productRoutes.delete('/:id/delete', productController.deleteProduct);

// @GET /products/:id/update
productRoutes.get('/:id/update', productController.getUpdateProduct);

// @PUT /products/:id/update
productRoutes.put('/:id/update', [upload.single('images'), validations], productController.updateProduct);

module.exports = productRoutes;