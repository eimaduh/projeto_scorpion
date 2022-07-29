'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('products', 'descripcion', 'description');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('products', 'descripcion', 'description');
  }
};