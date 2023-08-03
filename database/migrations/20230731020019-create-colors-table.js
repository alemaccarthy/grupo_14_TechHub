'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('colors', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
    },
    color: {
        type: Sequelize.STRING,
        allowNull: true
    }
  });
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('colors');
  }
};
