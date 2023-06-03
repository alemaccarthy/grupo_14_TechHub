const path = require('path');
const productModel = require('../models/products');

const productsController = {
    getProducts (req, res){
        res.render('products-list', {title: '| Productos'});
    },

    getProductDetail (req, res){
        res.render('product-detail', {title: '| Detalle'});
    },

    getCreateProduct (req, res){
        res.render('create-product', {title: '| Crear producto'});
    },

    postProduct (req, res){
        let product = req.body;

        product.price = Number(product.price);
        
        productModel.createProduct(product);

        res.redirect('/products');
    },

    getUpdateProduct (req, res){
        const id = Number(req.params.id);

        const updatedProduct = productModel.findbyId(id);

        if (!updatedProduct) {
            // Con el return detenemos la ejecución del controller, y con el res.send enviamos un mensaje de error
            // *queremos detener la ejecución para que no se ejecute el otro res.render (la otra respuesta)
            return res.send('error de id');
        }

        res.render('update-product', {title: 'Editar producto', updatedProduct});
    },

    deleteProduct(req, res){
        let id = Number(req.params.id);

        productModel.deleteById(id);

        res.redirect('/products');
    },

    updateProduct(req, res){
        let id = Number(req.params.id);
        let data = req.body;

        productModel.updateById(id, data);

        res.redirect('/products/:id/detail');
    }
}

module.exports = productsController;