const userModel = require('../models/user');
const fs = require('fs');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const usersController = {
    getRegister(req, res) {
        const selectedBrand = req.cookies.selectedBrand;
        res.render('register', { title: '| Registrarse', selectedBrand });
    },
    getPurchase(req, res) {
        const selectedBrand = req.cookies.selectedBrand;
        res.render('complete-purchase', { title: '| Finalizar compra', selectedBrand })
    },

    postRegister(req, res) {
        const selectedBrand = req.cookies.selectedBrand;
        const userValidation = validationResult(req);
        const user = req.body;
        user.password = bcrypt.hashSync(user.password, 12);
        delete user.confirmPassword;
        userDataBase = userModel.findByEmail(req.body.email);
        
        if (userDataBase) {
            return res.render('register', {
                title: '| Registrarse',
                user,
                selectedBrand,
                errors: {
                    email: {
                        msg: 'El email ya está registrado'
                    }
                }
            })
        }

        if (userValidation.errors.length > 0) {
            return res.render('register', {
                title: '| Registrarse',
                selectedBrand,
                errors: userValidation.mapped(),
                oldData: user,
            });
        }
        userModel.createUser(user, req);

        res.redirect('/user/profile');

    },

    // userModel.createUser(newUser);
    // res.redirect('/products' + newuser.id); //VER ESTO. Deberia redirigir a una vista que seria la del perfil del usuario 

    getProfile(req, res) {
        const user = req.session.user;
        const selectedBrand = req.cookies.selectedBrand;
        res.render('profile', { title: `| Nombre del usuario`, user, selectedBrand })
    },

    postPicture(req, res) {

        res.send('Respuesta provisoria'); //ARREGLAR
        res.redirect('/user/profile');

    },

    deletePicture(req, res) {
        res.send('Respuesta provisoria'); //ARREGLAR
        /* res.redirect('/user/profile'); */
    },

    getLogin(req, res) {
        const error = req.query.error || '';
        const selectedBrand = req.cookies.selectedBrand;

        res.render('login', { title: '| Ingresa', error, selectedBrand});
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
            } else {
                res.cookie('email', searchedUser.email, { maxAge: 1000 * 60 * 60 * 2 });
            }

            delete searchedUser.password;
            delete searchedUser.id;

            req.session.user = searchedUser;

            return res.redirect('/');
        } else {
            return res.redirect('/user/login?error=La contraseña es incorrecta');
        }
    },
    logOut(req, res) {

        req.session.destroy();

        res.clearCookie('email');

        res.redirect('/user/login');
    }
}


module.exports = usersController;