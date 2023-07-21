module.exports = (sequelize, dataType) => {
    const alias = 'User';

    const cols = {
        id:{
            primaryKey: true,
            type: dataType.STIRNG,
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
            allownull: false
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
        postalCode: {
            type: dataType.INTEGER
        },
        telephone: {
            type: dataType.INTEGER
        },
        deleted: {
            type: dataType.INTEGER
        },
        profilePicture: {
            //Y ACA????????????????
        }
    };

    const config = {
        tableName: 'clubes',
        timestamps: false,
        paranoid: true
    };

    const User = sequelize.define(alias, cols, config);

    return User;
}