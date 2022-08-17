'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Data', [{
      cpf: "12345678910",
      phone_number: "11947888889",
      avatar_path: '/imagesPath/avatarClaudio.png',
      id_photo: '/imagesPath/id.png',
      userId: 3
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Data', null, {});

  }
};