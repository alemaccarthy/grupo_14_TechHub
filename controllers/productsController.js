const path = require('path');

const productsController = {
    getProductDetail: (req, res) => {
        res.sendFile(path.join(__dirname, '/views/product-detail.html'));
    },
    getProductsList: (req, res) => {
        res.sendFile(path.join(__dirname, '/views/products-list.html'));
    }
}

module.exports = productsController;