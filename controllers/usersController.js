const userModel = require('../models/user');
const fs = require('fs');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const usersController = {
    getRegister(req, res) {
        const userSession = {};
        res.render('register', { title: '| Registrarse', userSession});
    },
    getPurchase(req, res) {
        let userSession = req.session.user;
        if(!userSession) userSession = {};
        res.render('complete-purchase', { title: '| Finalizar compra', userSession})
    },

    postRegister(req, res) {
        const userValidation = validationResult(req);
        const user = req.body;
        const userSession = {};
        user.password = bcrypt.hashSync(user.password, 12);
        delete user.confirmPassword;
        userSessionBase = userModel.findByEmail(req.body.email);

        if(userSessionBase){
            return res.render('register', { title : '| Registrarse',
            userSession, 
            user,
                errors: {
                    email:{
                        msg: 'El email ya está registrado'
                    }
                }
            })
        }

        if (userValidation.errors.length > 0) {
            return res.render('register', {
                title: '| Registrarse',
                errors: userValidation.mapped(),
                oldData: user,
                userSession
            });
        }
        userModel.createUser(user, req);

        res.redirect('/user/profile');

    },

    // userModel.createUser(newUser);
    // res.redirect('/products' + newuser.id); //VER ESTO. Deberia redirigir a una vista que seria la del perfil del usuario 

    getProfile(req, res) {
        let userSession = req.session.user;
        if(!userSession) userSession = {};
        res.render('profile', { title: `| Nombre del usuario`, userSession })
    },

    getLogin(req, res) {
        const error = req.query.error || '';
        const userSession = {};

        res.render('login', { title: '| Ingresa', error, userSession });
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