const { User } = require('../database/models');
const fs = require('fs');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator');

const userController = {
    getRegister(req, res) {
        res.render('register', { title: '| Registrarse' });
    },
    getPurchase(req, res) {
        res.render('complete-purchase', { title: '| Finalizar compra' })
    },

    createUser: async (req, res) => {
        const selectedBrand = req.cookies.selectedBrand;
        const user = { name, lastName, email, dni, password, confirmPassword, street, number, city, floor, door, postalCode, province, telephone } = req.body;
    
        try {
            // Hashear la contraseña de manera asíncrona
            user.password = await bcrypt.hash(user.password, 12);
            delete user.confirmPassword;
            let userDataBase = await User.findOne({
                where: {
                    email: user.email,
                }
            });
    
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
                });
            }
    
            const newUser = await User.create({
                id: uuidv4(),
                ...user,
                password: user.password,
            });
    
            req.session.user = {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email
            };
    
            res.redirect('/user/profile');
        } catch (error) {
            console.log(error);
        }
    },
    

    getProfile(req, res) {
        const user = req.session.user;
        res.render('my-profile', { title: `| Nombre del usuario`, user })
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

        res.render('login', { title: '| Ingresa', error });
    },

    loginUser : async (req, res) => {
        try {
            const searchedUser = await User.findOne({
                where: {
                    email: req.body.email
                }
            });

            if (!searchedUser) {
                return res.redirect('/user/login?error=El mail o la contraseña son incorrectos');
            }

            const { password: hashedPW } = searchedUser;

            const comparePW = bcrypt.compareSync(req.body.password, hashedPW);

            if (comparePW) {
                if (req.body.remember) {
                    req.session.user = {
                        id: searchedUser.id,
                        name: searchedUser.name,
                        email: searchedUser.email
                    };
                } 

                delete searchedUser.password;
                delete searchedUser.id;

                res.redirect('/user/profile');
            } else {
                return res.redirect('/user/login?error=La contraseña es incorrecta');
            }
        } catch (error) {
            
            console.error(error);
            return res.status(500).send('Error en el servidor');
        }
    },

    logOut(req, res) {

        req.session.destroy();

        res.clearCookie('email');

        res.redirect('/user/login');
    }
}


module.exports = userController;
