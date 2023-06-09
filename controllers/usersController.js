const path = require('path');
const userModel = require('../models/users');
const {validationResult} = require('express-validator');

const usersController = {
    getRegister: (req, res) => {
        res.render('register', { title: '| Registrarse' });
    },
    getPurchase: (req, res) => {
        res.render('complete-purchase', { title: '| Finalizar compra' })
    },

    postRegister: (req, res) => {
        const userValidation = validationResult(req);
        const oldData = req.body;

        console.log(oldData);

        if(userValidation.errors.length > 0){
            res.render('register', {title: '| Registrarse', errors: userValidation.mapped(), oldData})
        }
        else {
            res.redirect('/')
        };
    }
    
    // userModel.createUser(newUser);
    // res.redirect('/products' + newuser.id); //VER ESTO. Deberia redirigir a una vista que seria la del perfil del usuario 
    
    
}

module.exports = usersController;