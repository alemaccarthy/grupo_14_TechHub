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
        //if(errors.isEmpty()){
            //userModel.createUser(newUser);
            //res.redirect('/products' + newuser.id); VER ESTO. Deberia redirigir a una vista que seria la del perfil del usuario 
        //}
        // else {
            //return res.render('register', {errors: errors.array(), userData: req.body});
            //});
    }
            
    
    
}

module.exports = usersController;