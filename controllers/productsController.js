const path = require('path');
const productModel = require('../models/products');
const { log } = require('console');
const {validationResult} = require('express-validator');

const productsController = {
    getProducts (req, res){
        const products = productModel.findAll();
        res.render('products-list', {title: '| Productos', products});
    },

    getProductDetail (req, res){
        const id = Number(req.params.id);
        const product = productModel.findbyId(id);
        if(!product){
            return res.render('product-not-found', {title: 'Error'});
        }
        res.render('product-detail', {title: '| Detalle', product});
    },

    getCreateProduct (req, res){
        const product = req.body;

        res.render('create-product', {title: '| Crear producto', product});
    },

    postProduct (req, res){
        let product = req.body;
        let resultValidation = validationResult(req);
        product.price = Number(product.price);
        product.images = '/imgs/products-images' + req.filesfilename; //Object.values(req.files).map(el => '/imgs/products-images' + el.filename) 

        console.log(req.files);

        if (resultValidation.errors.length > 0) {

            // return res.send(resultValidation.mapped())
            return res.render('create-product', {
                title: '| Detalle',
                product, 
                errors: resultValidation.mapped(), 
                oldData: product});
        }     

        productModel.createProduct(product);

        res.redirect('/products');

        /*         let resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {

            return res.render('create-product', {
                title: '| Detalle', 
                errors: resultValidation.mapped(), 
                product: req.body});
        }     

        let product = req.body;

        product.price = Number(product.price);
        
        product.images = req.files.map(file => '/imgs/products-images' + file.filename);


        productModel.createProduct(product);

        res.redirect('/products'); */
    },

    getUpdateProduct (req, res){
        const id = Number(req.params.id);

        const updatedProduct = productModel.findbyId(id);

        if (!updatedProduct) {
            // Con el return detenemos la ejecución del controller, y con el res.send enviamos un mensaje de error
            // *queremos detener la ejecución para que no se ejecute el otro res.render (la otra respuesta)
            return res.render('product-not-found', {title: 'Error'});
        }

        res.render('update-product', {title: 'Editar producto', product: updatedProduct});
    },

    deleteProduct(req, res){
        let id = Number(req.params.id);

        productModel.deleteById(id);

        res.redirect('/products');
    },

    updateProduct(req, res){
        const id = Number(req.params.id);
        const data = req.body;

        productModel.updateById(id, data);

        res.redirect(`/products/${id}/detail`);
    }
}

module.exports = productsController;