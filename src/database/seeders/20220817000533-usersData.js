'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Data', [{
      cpf: "12345678910",
      phone_number: "11947888889",
      avatar_path: '/imagesPath/avatarClaudio.png',
      id_photo: '/imagesPath/id.png',
      userId: 3
    },
    {
      cpf: "12345678911",
      phone_number: "11947888880",
      avatar_path: '/imagesPath/avatar1.png',
      id_photo: '/imagesPath/rgMaria.png',
      userId: 2
    }, 
    {
      cpf: "12345678912",
      phone_number: "11947888887",
      avatar_path: '/imagesPath/avatar.png',
      id_photo: '/imagesPath/rgLucas.png',
      userId: 1
    },
    {
      cpf: "12345678918",
      phone_number: "11947888886",
      avatar_path: '/imagesPath/avataM.png',
      id_photo: '/imagesPath/rgFernando.png',
      userId: 4
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Data', null, {});

  }
};