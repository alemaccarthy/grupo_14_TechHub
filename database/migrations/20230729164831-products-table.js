'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      currency: {
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      deleted: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      brand_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'brands',
          key: 'id'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');

  }
};