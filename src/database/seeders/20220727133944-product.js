'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Products', 
    [{
        name: 'Mangueira antiChamas',
        description: 'Mangueira bacaninha lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam',
        specification: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam et justify methodOverride',
        price: 36.0,
        stock: 20,
        sale: 'N',
        brand: 'Anubis',
        category: 'Mangueira'

      },
      
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};