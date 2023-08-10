const { User } = require('../database/models');
const fs = require('fs');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const usersController = {
    getRegister(req, res) {
        res.render('register', { title: '| Registrarse' });
    },
    getPurchase(req, res) {
        res.render('complete-purchase', { title: '| Finalizar compra' })
    },

    createUser: async (req, res) => {
        const selectedBrand = req.cookies.selectedBrand;
        const user = { name, lastName, email, dni, password, street, number, city, floor, door, postalCode, province, telephone } = req.body;
        user.password = bcrypt.hashSync(user.password, 12);
        delete user.confirmPassword;

        try {
            let userDataBase = User.findOne({
                where: {
                    email: user.email
                }
            })

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

            /* if (userValidation.errors.length > 0) {
                return res.render('register', {
                    title: '| Registrarse',
                    selectedBrand,
                    errors: userValidation.mapped(),
                    oldData: user,
                });
            } */

            const newUser = await User.create({
                name,
                lastName,
                email,
                password,
                dni,
                street,
                number,
                floor,
                door,
                postalCode,
                province,
                city,
                telephone
            });


        } catch (error) {
            console.log(error);
        }

        res.redirect(`/user/profile`);
    },

    postRegister(req, res) {
        /* const selectedBrand = req.cookies.selectedBrand;
        const userValidation = validationResult(req);
        const user = req.body;
        user.password = bcrypt.hashSync(user.password, 12);
        delete user.confirmPassword;
        userDataBase = userModel.findByEmail(req.body.email); */

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
