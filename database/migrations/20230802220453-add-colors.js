'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        queryInterface.bulkInsert('colors', [
            { color: 'white' },
            { color: 'black' },
            { color: 'gold' },
            { color: 'silver' },
            { color: 'red' },
            { color: 'green' },
            { color: 'purple' },
            { color: 'cream' },
        ], {});

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    }
};