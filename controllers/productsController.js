const path = require('path');
const productModel = require('../models/products');

const productsController = {
    getProducts (req, res){
        res.render('products-list', {title: 'Productos'});
    },

    getProductDetail (req, res){
        res.render('product-detail', {title: 'Detalle'});
    },

    getCreateProduct (req, res){
        res.render('create-product', {title: 'Crear producto'});
    },

    postProduct (req, res){
        let product = req.body;

        product.price = Number(product.price);
        
        productModel.createProduct(product);

        res.redirect('/products');
    },

    getUpdateProduct (req, res){
        res.render('update-product', {title: 'Editar producto'});
    },

    deleteProduct(req, res){
        let id = Number(req.params.id);

        productModel.deleteById(id);

        res.redirect('/products');
    getProductsList: (req, res) => {
        res.render('products-list');
    },
    getCreateProduct: (req, res) => {
        res.render('create-product');
    },

    updateProduct(req, res){
        let id = Number(req.params.id);
        let data = req.body

        productModel.updateById(id, data);

        res.redirect('/products/:id/detail')
    }
}

module.exports = productsController;