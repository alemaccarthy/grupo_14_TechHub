const { User } = require('../../database/models');
const { Op } = require('sequelize');

const userController = {

    getAll: async (req, res) => {
        const users = await User.findAll({
            raw: true,
            nest: true,
        });

        const usersJSON = users.map(el => ({
            id: el.id,
            name: el.name,
            lastName: el.lastName,
            email: el.email,
            detail: `http://localhost:3000/api/users/${el.id}`
        }));
    
        res.json(usersJSON);

    },

    getProfile: async (req, res) => {
        const id = req.params.id;
        const user = await User.findByPk(id);

        const userJSON = user.toJSON(user);

        delete userJSON.password;

        res.json(userJSON);

    },

};


module.exports = userController;
