'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dni: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      street: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.INTEGER
      },
      floor: {
        type: Sequelize.INTEGER
      },
      door: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      province: {
        type: Sequelize.STRING
      },
      postal_code: {
        type: Sequelize.INTEGER
      },
      telephone: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
      profile_picture: {
        type: Sequelize.STRING
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};



