const path = require('path');
const productModel = require('../models/products');
const { log } = require('console');

const productsController = {
    getProducts (req, res){
        const products = productModel.findAll();
        res.render('products-list', {title: '| Productos', products});
    },

    getProductDetail (req, res){
        const id = Number(req.params.id);
        const product = productModel.findbyId(id);
        if(!product){
            return res.send('<h1>Lo sentimos, el producto solicitado no existe 😢</h1>'); //RETOCAR?
        }
        res.render('product-detail', {title: '| Detalle', product});
    },

    getCreateProduct (req, res){
        const id = Number(req.params.id);
        const updatedProduct = productModel.findbyId(id);

        res.render('create-product', {title: '| Crear producto', updatedProduct});
    },

    postProduct (req, res){
        let product = req.body;

        /* console.log(product); */

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
        const id = Number(req.params.id);
        const data = req.body;

        productModel.updateById(id, data);

        res.redirect('/products');
    }
}

module.exports = productsController;