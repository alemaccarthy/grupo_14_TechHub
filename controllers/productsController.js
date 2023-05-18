const path = require('path');

const productsController = {
    getProductDetail: (req, res) => {
        res.render('product-detail');
    },
    getProductsList: (req, res) => {
        res.render('products-list');
    }
}

module.exports = productsController;