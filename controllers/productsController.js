const productModel = require('../models/product');
const { validationResult } = require('express-validator');

const productsController = {
    getProducts(req, res) {

        const brand = req.params.brand || '';
        const category = req.params.category || ''; 

        const products = productModel.findAll();
        res.render('products-list', { title: '| Productos', products, brand, category});
    },

    getProductDetail(req, res) {

        // const brand = req.params.brand;
        // const category = req.params.category;
        const id = Number(req.params.id);
        const product = productModel.findbyId(id);

        if (!product) {
            return res.render('product-not-found',{ title: '| Producto no disponible'});
        }
        res.render('product-detail', { title: '| Detalle',/* brand , category, */ product});
    },

    getCreateProduct(req, res) {
        const product = req.body;

        res.render('create-product', { title: '| Crear producto', product});
    },

    postProduct(req, res) {
        const product = req.body;
        const resultValidation = validationResult(req);
        product.price = Number(product.price);

        if (resultValidation.errors.length > 0) {

            return res.render('create-product', {
                title: '| Crear producto',
                errors: resultValidation.mapped(),
                product
            });
        }

        product.images = req.files.map(el => '/imgs/products-images/' + el.filename);

        productModel.createProduct(product);

        res.redirect('/products');
    },

    getUpdateProduct(req, res) {
        const id = Number(req.params.id);

        const updatedProduct = productModel.findbyId(id);

        if (!updatedProduct) {
            // Con el return detenemos la ejecución del controller, y con el res.send enviamos un mensaje de error
            // *queremos detener la ejecución para que no se ejecute el otro res.render (la otra respuesta)
            return res.render('product-not-found');
        }

        res.render('update-product', { title: 'Editar producto', product: updatedProduct});
    },

    deleteProduct(req, res) {
        let id = Number(req.params.id);

        productModel.deleteById(id);

        res.redirect('/products');
    },

    updateProduct(req, res) {

        const id = Number(req.params.id);
        const product = req.body;

        product.images = req.files.map(el => '/imgs/products-images/' + el.filename);

        productModel.updateById(id, product);

        res.redirect(`/products/${id}/detail`);
    }
}

module.exports = productsController;