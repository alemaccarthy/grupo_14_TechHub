'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order_items', {
      id: {
        primaryKey: true,
        type: dataType.INTEGER,
        autoIncrement: true,
      },
      order_id: {
        type: dataType.INTEGER,
      },
      product_id: {
        type: dataType.INTEGER,
      },
      category_id: {
        type: dataType.INTEGER,
      },
      quantity: {
        type: dataType.INTEGER,
      },
      price: {
        type: dataType.DECIMAL,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order_items');
  }
};
