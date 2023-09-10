const { User } = require('../database/models');
const fs = require('fs');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator');

const userController = {
    getRegister(req, res) {
        const selectedBrand = req.cookies.selectedBrand;
        res.render('register', { title: '| Registrarse', selectedBrand });
    },
    getPurchase(req, res) {
        res.render('complete-purchase', { title: '| Finalizar compra' })
    },

    createUser: async (req, res) => {
        const selectedBrand = req.cookies.selectedBrand;
        const user = { name, lastName, email, profile_picture, dni, password, confirmPassword, street, number, city, floor, door, postalCode, province, telephone } = req.body;

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

            let profilePicture = '/imgs/profile-images/no-image-profile.jpg';

            if (req.file) { profilePicture = '/imgs/profile-images/' + req.file.filename; }

            const newUser = await User.create({
                id: uuidv4(),
                ...user,
                password: user.password,
                profile_picture: profilePicture
            });

            req.session.user = {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                profile_picture: newUser.profile_picture
            };

            res.redirect(`/user/profile/${newUser.name}/${newUser.id}`);
        } catch (error) {
            console.log(error);
        }
    },


    getProfile(req, res) {
        const loggedUser = req.session.user;
        const selectedBrand = req.cookies.selectedBrand;
        res.render('profile', { title: `| Nombre del usuario`, loggedUser, selectedBrand })
    },

    getLogin(req, res) {
        const error = req.query.error || '';
        const selectedBrand = req.cookies.selectedBrand;
        res.render('login', { title: '| Ingresa', error, selectedBrand });
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
                // Configuración de las variables de sesión
                req.session.user = {
                    id: loggedUser.id,
                    name: loggedUser.name,
                    email: loggedUser.email
                };

                if (!req.body.remember) {
                    // Si la casilla "Mantener sesión abierta" está marcada,
                    // crea una cookie adicional para mantener la sesión abierta.
                    res.cookie('remember', 'true', {
                        maxAge: 30 * 60 * 1000,
                        httpOnly: true, // la cookie no es accesible desde el frontend
                        sameSite: 'Lax' // Ajusta esta configuración según tus necesidades de seguridad
                    });
                }

                delete loggedUser.password;
                delete loggedUser.id;
                req.session.loggedUser = loggedUser;

                return res.redirect(`/user/profile/${loggedUser.name}${loggedUser.lastName}/${loggedUser.id}`);
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

    async getUpdateProfile(req, res) {
        try {
            const loggedUser = req.session.user;
    
            if (loggedUser) {
                const user = await User.findByPk(loggedUser.id);
                const selectedBrand = req.cookies.selectedBrand;
                console.log('ESTE ES EL USER QUE TRAE LA BASE DE DATOS ' + JSON.stringify(user, null, 2));
                return res.render('update-profile', { title: `| Nombre del usuario`, loggedUser, selectedBrand, user });
            }
    
            return res.render('update-profile', { title: `| Nombre del usuario`, loggedUser });
        } catch (error) {
            console.error(error);
            res.send("Error al recuperar el perfil del usuario");
        }
    },
    
    updateProfile: async (req, res) => {
        const newValues = req.body;
        let profilePicture = '/imgs/profile-images/no-image-profile.jpg';
        if (req.file) { profilePicture = '/imgs/profile-images/' + req.file.filename; }

        try {
            await User.update(newValues, {
                where: {
                    id: req.params.id
                }
            });


            req.session.user = {
                id: req.session.user.id,
                name: newValues.name,
                email: newValues.email,
                profile_picture: profilePicture
            };

            loggedUser = req.session.user;

            res.redirect(`/user/profile/:nombre/:id`);
        } catch (error) {
            console.log(error);
            res.send("no se pudo actualizar");
        };
    },

};

module.exports = userController;
