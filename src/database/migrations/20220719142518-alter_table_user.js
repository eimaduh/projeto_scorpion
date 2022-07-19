'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'id_photo', {
      type: Sequelize.INTEGER,
      allowNull: false
      });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'id_photo');
    
  }
};