const path = require('path');

const usersController = {
    getRegister: (req, res) => {
        res.render('register');
    },
    getPurchase: (req, res) => {
        res.render('complete-purchase')
    }
}

module.exports = usersController;