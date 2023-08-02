'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('colors', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    color: {
        type: Sequelize.STRING,
        allowNull: false
    }
  });
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('colors');
  }
};
