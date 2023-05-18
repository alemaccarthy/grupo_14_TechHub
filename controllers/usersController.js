const path = require('path');

const usersController = {
    getLogin: (req, res) => {
        res.render('login');
    }, 

    getRegister: (req, res) => {
        res.render('register');
    }
}

module.exports = usersController;