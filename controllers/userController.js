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
        const user = { name, lastName, email, profile_picture, dni, password, confirmPassword, street, number, city, floor, door, postalCode, province, telephone } = req.body;
        console.log('ESTE ES EL USUARIO QUE SE CREA ' + JSON.stringify(user, null, 2));
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


            const images = req.files.map(el => ({ path: '/imgs/products-images/' + el.filename, product_id: newProduct.dataValues.id }));


            req.session.user = {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email
            };

            res.redirect(`/user/profile/${newUser.name}/${newUser.id}`);
        } catch (error) {
            console.log(error);
        }
    },


    getProfile(req, res) {
        const loggedUser = req.session.user;
        res.render('profile', { title: `| Nombre del usuario`, loggedUser })
    },

    getLogin(req, res) {
        const error = req.query.error || '';

        res.render('login', { title: '| Ingresa', error });
    },

    loginUser: async (req, res) => {
        try {
            const loggedUser = await User.findOne({
                where: {
                    email: req.body.email
                }
            });

            if (!loggedUser) {
                return res.redirect('/user/login?error=El mail o la contraseña son incorrectos');
            }

            const { password: hashedPW } = loggedUser;

            const comparePW = bcrypt.compareSync(req.body.password, hashedPW);

            if (comparePW) {
                if (req.body.remember) {
                    req.session.user = {
                        id: loggedUser.id,
                        name: loggedUser.name,
                        email: loggedUser.email
                    };
                }

                delete loggedUser.password;
                delete loggedUser.id;
                req.session.loggedUser = loggedUser;
                console.log('ESTE ES UN USUARIO LOGUEADO' + JSON.stringify(loggedUser, null, 2));
                return res.redirect(`/user/profile/${loggedUser.name}${loggedUser.lastName}/${loggedUser.id}`);
                //return res.render('profile', { title: '| Perfil del Usuario', loggedUser });
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
    },

    deleteProfile: async (req, res) => {
        console.log('ESTE ES EL USUARIO QUE SE VA A ELIMINAR ' + JSON.stringify(req.session.user, null, 2));
        try {
            const loggedUser = await User.findOne({
                where: {
                    email: req.session.user.email
                }
            });

            await User.destroy({
                where: {
                    id: loggedUser.id
                }
            });
            req.session.destroy();

            return res.redirect('/');

        } catch (error) {

            console.error(error);

            return res.status(500).send('Error al eliminar el perfil');
        }

    },

    getUpdateProfile(req, res) {
        const loggedUser = req.session.user;
        res.render('update-profile', { title: `| Nombre del usuario`, loggedUser })
    },

    updateProfile: async (req, res) => {
        const newValues = req.body;

        try {
            await User.update(newValues, {
                where: {
                    id: req.params.id
                }
            });

            res.redirect(`/user/update-profile/${newValues.name}${newValues.lastName}/${newValues.id}`);
        } catch (error) {
            res.send("no se pudo actualizar");
            console.log(error);
        };
    },

};


module.exports = userController;
