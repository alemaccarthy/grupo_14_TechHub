'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
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
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
