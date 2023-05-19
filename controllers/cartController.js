const path = require('path');

const cartController = {
    getCart: (req, res) => {
        res.render('productCart')
    },
    getPurchase: (req, res) => {
        res.render('complete-purchase')
    },

    getCart2: (req, res) => {
        res.render('./partials/cart')
    },
}



module.exports = cartController;