'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'phone_number', {
      type: Sequelize.INTEGER,
      allowNull: false
      });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'phone_number');
    
  }
};
