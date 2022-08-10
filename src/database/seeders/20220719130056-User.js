'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',
      [{
          name: 'Lucas',
          surname: 'Aboud',
          email: 'lucas@scorpion.com',
          birth_date: "1989/11/02",
          password: 'lucas123',
          cpf: "12345678911",
          phone_number: "11947888888",
          avatar_path: '/imagesPath/avatar.png',
          id_photo: '',
          type: "admin",
        },
        {
          name: 'Maria',
          surname: 'DB',
          email: 'mariadb@scorpion.com',
          birth_date: "2002/10/10",
          password: 'maria123',
          cpf: "12345678912",
          phone_number: "11947888880",
          avatar_path: '/imagesPath/avatar1.png',
          id_photo: '',
          type: "admin",
        },
        {
          name: 'Claudio',
          surname: 'Souza',
          email: 'claudio@email.com',
          birth_date: "1984/02/02",
          password: 'claudio123',
          cpf: "12345678910",
          phone_number: "11947888889",
          avatar_path: '/imagesPath/avatarClaudio.png',
          id_photo: '/imagesPath/id.png',
          type: "user",
        },
        {
          name: 'Fernando',
          surname: 'Uncle',
          email: 'fernando@scorpion.com',
          birth_date: "1986/10/02",
          password: 'fernando123',
          cpf: "12345678916",
          phone_number: "11947888886",
          avatar_path: '/imagesPath/avatarM.png',
          id_photo: '',
          type: "admin",
        },


      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};