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
        next();
        if (req.cookies.remember != undefined && req.session.logguedUser === undefined) {
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
                    if (users[user].email === req.cookies.remember) {
                        userToLog = users[user];
                        break;
                    }
                }
                req.session.logguedUser = userToLog;
            }
    
        }
    }
}

module.exports = middlewares;