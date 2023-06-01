const path = require('path');

const productsController = {
    getProducts: (req, res) => {
        res.render('products-list');
    },
    getProductDetail: (req, res) => {
        res.render('product-detail');
    },
    getCreateProduct: (req, res) => {
        res.render('create-product');
    },
    getUpdateProduct: (req, res) => {
        res.render('update-product');
    }
}

module.exports = productsController;