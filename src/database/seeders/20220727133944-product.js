'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Product', [
      {
        id: 0,
        name: 'Mangueira antiChamas',
        description: 'Manguira bacaninha lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam',
        price: 36.00,

      },
      {
        id: 1,
        name: 'Carvão fumacinha',
        description: 'Carvãozinho bacaninha lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam',
        price: 55.00,

      },
      {
        id: 2,
        name: 'Alumínio para Rosh',
        description: 'Alumínio bacaninha lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam',
        price: 15.00,

      },
      {
        id: 3,
        name: 'Rosh',
        description: 'Rosh bacaninha lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam',
        price: 40.00,

      },
      {
        id: 4,
        name: 'Pegador de carvão',
        description: 'Pegador bacaninha lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam',
        price: 15.00,

      },
      {
        id: 5,
        name: 'Zomo gum',
        description: 'Essência bacaninha lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam',
        price: 9.00,

      },
      {
        id: 6,
        name: 'Love66',
        description: 'Essência bacaninha lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam',
        price: 35.00,

      },
      {
        id: 7,
        name: 'Narguile Volkano',
        description: 'Narguile Volkano bacaninha lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam',
        price: 600.00,

      },
      {
        id: 8,
        name: 'Vaso Narguile',
        description: 'Vaso bacaninha lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam',
        price: 48.00,

      },
    ], { tablename: 'products' });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
