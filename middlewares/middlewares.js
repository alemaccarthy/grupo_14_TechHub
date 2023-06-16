const fs = require('fs');
const userModel = require('../models/user')

const middlewares = {
    middleware404(req, res, next) {
        res.status(404).render('error404');
    },

    guestMiddleware(req, res, next) {
        if (req.session.user) {
            return res.redirect('/user/profile');
        }
        next();
    },

    authMiddleware(req, res, next){
        if(!req.session.user){
            return res.redirect('/')
        }
        next()
    },

    userLoggedMiddleware(req, res, next){
        res.locals.isLogged = false;
        if(req.session && req.session.user){
        res.locals.isLogged = true;
        res.locals.user = req.session.user;
        };

        next();
    },

    logMiddleware(req, res, next) {
        fs.appendFileSync('../resources/log.txt', 'El usuario ha ingresado en la ruta ' + req.url);
        next();
    },

    rememberMiddleware(req, res, next) {
        
        if(req.cookies.email){
            const userModel = require('../models/user');

            const userFromCookies = userModel.findByEmail(req.cookies.email);

            delete userFromCookies.id;
            delete userFromCookies.password;

            req.session.user = userFromCookies;
        }
        
        next();
    },

    
}

module.exports = middlewares;