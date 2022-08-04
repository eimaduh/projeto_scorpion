'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Products', 
    [{
        name: 'Mangueira Joy Stick',
        description: 'As mangueiras Joy Stick são compostas por um corpo em silicone, uma piteira e uma contra piteira em alumínio e anodizadas. A mangueira Joy é lavável e de fácil higienização, assim você pode sentir o sabor mais presente em sua sessão. Indicamos higienizar após o uso',
        specification: 'Material da Mangueira:	Silicone - Lavavel:	Sim - Material da Piteira:	Aluminio',
        price: 25.00,
        stock: 20,
        sale: 'N',
        image_path: '../../../public/imagesPath/1659627567935.webp',
        brand: 'Joy',
        category: 'Mangueira'

      },
      
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};