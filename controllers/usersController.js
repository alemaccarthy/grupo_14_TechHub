const userModel = require('../models/users');
const fs = require('fs');
const session = require('express-session');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const usersController = {
    getRegister(req, res) {
        res.render('register', { title: '| Registrarse' });
    },
    getPurchase(req, res) {
        res.render('complete-purchase', { title: '| Finalizar compra' })
    },

    postRegister(req, res) {
        const userValidation = validationResult(req);
        const user = req.body;
        user.password = bcrypt.hashSync(user.password, 12);
        delete user.confirmPassword;

        /*if (userValidation.errors.length > 0) {
            return res.render('register', { title: '| Registrarse', errors: userValidation.mapped(), user })
        }*/

        if (userValidation.errors.length > 0) {
            return res.render('register', {
                title: '|Registrarse',
                errors: userValidation.mapped(),
                oldData: user
            });
        }
        userModel.createUser(user);

        res.redirect('/');

    },

    // userModel.createUser(newUser);
    // res.redirect('/products' + newuser.id); //VER ESTO. Deberia redirigir a una vista que seria la del perfil del usuario 

    getProfile(req, res) {
        res.render('profile', { title: `| Nombre del usuario` })
    }
}


module.exports = usersController;