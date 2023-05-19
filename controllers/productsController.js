const path = require('path');

const productsController = {
    getProductDetail: (req, res) => {
        res.render('product-detail');
    },
    getProductsList: (req, res) => {
        res.render('products-list');
    },
    getCreateProduct: (req, res) => {
        res.render('create-product')
    }
}

module.exports = productsController;