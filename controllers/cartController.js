const path = require('path');

const cartController = {
    getCart: (req, res) => {
        res.sendFile(path.join(__dirname, '/views/productCart.html'))
    },
    getPurchase: (req, res) => {
        res.sendFile(path.join(__dirname, '/views/complete-purchase.html'))
    }
}

module.exports = cartController;