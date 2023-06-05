const path = require('path');
const userModel = require('../models/users');

const usersController = {
    getRegister: (req, res) => {
        res.render('register', { title: '| Registrarse' });
    },
    getPurchase: (req, res) => {
        res.render('complete-purchase', { title: '| Finalizar compra' })
    },

    postRegister: (req, res) => {
        let newUser = req.body;
        newUser.id = Number(newUser.id);
        
        userModel.createUser(newUser);

        //res.redirect('/products'); VER ESTO
        
    }
}

module.exports = usersController;