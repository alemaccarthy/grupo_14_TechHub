const path = require('path');
const userModel = require('../models/users');
const {registerValidations} = require('express-validator');

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
        let errors = registerValidations(req);
        // falta usar condicional para enviar a la vista que pasa si hay errores en la validacion
        //if(!errors.isEmpty()){ 
            //return res.render('register', {errors: errors.mapped());

            userModel.createUser(newUser);

        //res.redirect('/products' + newuser.id); VER ESTO. Deberia redirigir a una vista que seria la del perfil del usuario
    }
    
}

module.exports = usersController;