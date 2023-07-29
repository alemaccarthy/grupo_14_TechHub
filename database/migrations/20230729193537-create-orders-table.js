'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        primaryKey: true,
        type: dataType.INTEGER,
        autoIncrement: true,
      },
      total_amount: {
        type: dataType.DECIMAL,
        allowNull: false,
      },
      user_id: {
        type: dataType.INTEGER,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
