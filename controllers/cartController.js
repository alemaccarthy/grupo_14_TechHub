const path = require('path');

const cartController = {
    getCart: (req, res) => {
        res.render('productCart')
    },
    getPurchase: (req, res) => {
        res.render('complete-purchase')
    }
}

module.exports = cartController;