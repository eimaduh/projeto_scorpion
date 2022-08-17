'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Addresses', [{
     userId: 3,
     street: "Rua Um",
     number: 415,
     district: "Bom Retiro",
     city: "São Paulo",
     zipcode: 8692001

    }], {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Addresses', null, {});
     
  }
};
