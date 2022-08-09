'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Orders', [{
      user_id: 40,
      order_status: "Preparando pedido",
      total: 150.00
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Orders', null, {});
    
  }
};
