'use strict';

const bcrypt = require('bcrypt')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
        */

        await queryInterface.bulkInsert('Users', [
            {
                firstName: 'Real',
                lastName: 'Madrid',
                email: 'Real@gmail.com',
                password: bcrypt.hashSync('mamnoo3', 10),
                gender: 'male'
            },
            {
                firstName: 'Real',
                lastName: 'Madrid',
                email: 'Madrid@gmail.com',
                password: bcrypt.hashSync('mamnoo3', 10),
                gender: 'male'
            },
            {
                firstName: 'Jane',
                lastName: 'Doe',
                email: 'jane.doe@gmail.com',
                password: bcrypt.hashSync('secret', 10),
                gender: 'female'
            },
        ])
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */

        await queryInterface.bulkDelete('Users', null, {});
    }
};
