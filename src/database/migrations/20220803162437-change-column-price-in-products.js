'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.changeColumn('products', 'price', {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  })
},


  async down (queryInterface, Sequelize) {
  await queryInterface.changeColumn('products', 'price');
   
  }
};


