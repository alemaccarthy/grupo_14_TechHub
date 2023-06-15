const fs = require('fs');

const middlewares = {
    middleware404(req, res, next) {
        res.status(404).render('error404');
    },

    guestMiddleware(req, res, next) {
        if (req.session.logguedUser == undefined) {
            next();
        }
        res.send('Esta página es solo para invitados')
    },

    logMiddleware(req, res, next) {
        fs.appendFileSync('../resources/log.txt', 'El usuario ha ingresado en la ruta ' + req.url);
        next();
    },

    rememberMiddleware(req, res, next) {
        
        if(req.cookies.email){
            const userModel = require('../models/user');

            const user = userModel.findByEmail(req.cookies.email);

            delete user.id;
            delete user.password;

            req.session.user = user;
        }
        
        next();
    },

    
}

module.exports = middlewares;