'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Order_items', [{
    user_id: 40,
    order_id: 1,
    product_id: 94,
    quantity: 5,
    total: 150.00
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Order_items', null, {});
    
  }
};
