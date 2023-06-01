const path = require('path');

const productsController = {
    getProductDetail: (req, res) => {
        res.render('product-detail');
    },
    getProductsList: (req, res) => {
        res.render('products-list');
    },
    getCreateProduct: (req, res) => {
        res.render('create-product');
    },
    getUpdateProduct: (req, res) => {
        res.render('update-product');
    }
}

module.exports = productsController;