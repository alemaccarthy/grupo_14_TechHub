const path = require('path');

const usersController = {
    getRegister: (req, res) => {
        res.render('register', { title: '| Registrarse' });
    },
    getPurchase: (req, res) => {
        res.render('complete-purchase', { title: '| Finalizar compra' })
    },

    postRegister: (req, res) => {
        let newUser = req.body;
        
    }
}

module.exports = usersController;