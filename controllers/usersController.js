const userModel = require('../models/users');
const fs = require('fs');
const session = require('express-session');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const usersController = {
    getRegister(req, res) {
        const userData = {};
        res.render('register', { title: '| Registrarse', userData});
    },
    getPurchase(req, res) {
        let userData = req.session.user;
        if(!userData) userData = {};
        res.render('complete-purchase', { title: '| Finalizar compra', userData})
    },

    postRegister(req, res) {
        const userValidation = validationResult(req);
        const user = req.body;
        user.password = bcrypt.hashSync(user.password, 12);
        delete user.confirmPassword;

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
        let userData = req.session.user;
        if(!userData) userData = {};
        res.render('profile', { title: `| Nombre del usuario`, userData })
    },

    getLogin(req, res) {
        const error = req.query.error || '';
        const userData = {};

        res.render('login', { title: '| Ingresa', error, userData });
    },

    loginUser(req, res) {
        const searchedUser = userModel.findByEmail(req.body.email);

        if (!searchedUser) {
            return res.redirect('/user/login?error=El mail o la contraseña son incorrectos');
        }
        const { password: hashedPW } = searchedUser;

        const comparePW = bcrypt.compareSync(req.body.password, hashedPW);

        if (comparePW) {
            if (req.body.remember) {
                res.cookie('email', searchedUser.email, {
                    maxAge: 1000 * 60 * 60 * 24 * 365
                });
            }else{
                res.cookie('email', searchedUser.email, {maxAge: 1000* 60* 60* 2});
            }

            delete searchedUser.password;
            delete searchedUser.id;

            req.session.user = searchedUser;

            return res.redirect('/');
        } else {
            return res.redirect('/user/login?error=La contraseña es incorrecta');
        }
    },
    signOut(req, res){

        res.clearCookie('email');

        req.session.user = {};

        res.redirect('/user/login');
    }
}


module.exports = usersController;