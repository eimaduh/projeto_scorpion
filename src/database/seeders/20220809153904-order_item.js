'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('OrderItems', [{
    userId: 3,
    orderId: 1,
    productId: 5,
    quantity: 5,
    price: 150.00
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('OrderItems', null, {});
    
  }
};