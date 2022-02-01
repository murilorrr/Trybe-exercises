'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => await queryInterface.bulkInsert('Users', 
    [
      {
        fistName: 'rogerinho',
        email: 'rogerio123@gmail.com',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        fistName: 'eduardo',
        email: 'eduardo@gmail.com',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ],
    {}),

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Users', null, {})
  }
};
