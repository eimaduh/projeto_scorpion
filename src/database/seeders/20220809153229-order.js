'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Orders', [{
      userId: 3,
      addressId: 1,
      order_status: "Preparando pedido",
      total: 150.00
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Orders', null, {});
    
  }
};