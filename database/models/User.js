module.exports = (sequelize, dataType) => {
    const alias = 'User';

    const cols = {
        id:{
            primaryKey: true,
            type: dataType.STRING,
        },
        name: {
            type: dataType.STRING,
            allowNull: false
        },
        lastName: {
            type: dataType.STRING,
            allowNull: false
        },
        email: {
            type: dataType.STRING,
            allowNull: false
        },
        password: {
            type: dataType.STRING,
            allowNull: false
        },
        dni: {
            type: dataType.INTEGER,
            allowNull: false
        },
        street: {
            type: dataType.STRING
        },
        number: {
            type: dataType.INTEGER
        },
        floor: {
            type: dataType.INTEGER
        },
        door: {
            type: dataType.STRING
        },
        city: {
            type: dataType.STRING
        },
        province: {
            type: dataType.STRING
        },
        postal_code: {
            type: dataType.INTEGER
        },
        telephone: {
            type: dataType.INTEGER
        },
        deleted: {
            type: dataType.INTEGER
        },
        profile_picture: {
            type: dataType.STRING
        }
    };

    const config = {
        tableName: 'users',
        timestamps: false,
        paranoid: true
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = models => {
        User.hasMany(models.Order, {
            as: 'orders',
            foreignKey: 'user_id'
        });
    }

    return User;
}