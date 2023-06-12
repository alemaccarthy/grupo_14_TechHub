const userModel = require('../models/users');
const fs = require('fs');
const session = require('express-session');
const bcrypt = require('bcryptjs');
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

        if (userValidation.errors.length > 0) {
            res.render('register', { title: '| Registrarse', errors: userValidation.mapped(), user })
        }
        userModel.createUser(user);

        res.redirect('/');

    },

    // userModel.createUser(newUser);
    // res.redirect('/products' + newuser.id); //VER ESTO. Deberia redirigir a una vista que seria la del perfil del usuario 

    /// Revisar esto porque nosotros no tenemos vista de login sino una ventana
    login: (req, res) => {
        res.render('log-in', { title: '| Iniciar sesión' });
    },

    processLogin: (req, res) => {
        let errors = validationResult(req);
        if (errors.empty()) {
            let usersJSON = fs.readFileSync('./data/users.json', { encoding: 'utf-8' });
            let users;
            if (usersJSON === '') {
                users = [];
            } else {
                users = JSON.parse(usersJSON);
            }

            let userToLog = null;

            for (let user in users) {
                if (users[user].email === req.body.email && users[user].password === req.body.password) {
                    if (bcrypt.compareSync(req.body.password, users[user].password)) {
                        userToLog = users[user];
                        break;
                    }
                }
            }

            if (userToLog === undefined) {
                res.render('log-in', { errors: [{ msg: 'Credenciales inválidas' }] });
            }
            req.session.logguedUser = userToLog; /// VER POR QUE NO FUNCA el session
            if (req.body.remember != undefined){
                res.cookie('remember', userToLog.email, {maxAge: 120000});
            }
        }
        else {
            res.render('log-in', { errors: errors.errors });
        }
    }

}


module.exports = usersController;