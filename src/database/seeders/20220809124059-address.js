'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Addresses', [{
     user_id: 40,
     street: "Rua Um",
     number: 415,
     district: "Bom Retiro",
     zipcode: 8692001,
     city: "São Paulo"
    }], {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Address', null, {});
     
  }
};
