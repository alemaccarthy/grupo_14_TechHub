const { User } = require('../../database/models');
const { Op } = require('sequelize');

const userController = {

    getAll: async (req, res) => {
        const users = await User.findAll({
            raw: true,
            nest: true,
        });

        const usersJSON = users.map(user => ({
            id: user.id,
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            profile_picture: user.profile_picture,
            detail: `http://localhost:3000/api/users/${user.id}`
        }));
    
        res.json({users: usersJSON});

    },

    getProfile: async (req, res) => {
        const id = req.params.id;
        const user = await User.findByPk(id);

        const userJSON = user.toJSON(user);

        delete userJSON.password;

        res.json({user: userJSON});

    },

};


module.exports = userController;
