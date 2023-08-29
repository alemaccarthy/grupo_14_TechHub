const { User } = require('../../database/models');
const { Op } = require('sequelize');


const userController = {

    getAll: async (req, res) => {
        const users = await User.findAll({
            raw: true,
            nest: true,
        });
    
        res.json(users);
    },

    getProfile(req, res) {
        const loggedUser = req.session.user;
        res.render('profile', { title: `| Nombre del usuario`, loggedUser });
    },

};


module.exports = userController;
