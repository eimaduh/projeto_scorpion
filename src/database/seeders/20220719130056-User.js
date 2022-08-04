'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',
      [{
          name: 'Lucas',
          surname: 'Aboud',
          email: 'lucas@scorpion.com',
          birth_date: 'date',
          password: 'lucas123',
          cpf: 12345678911,
          phone_number: 11947888888,
          avatar_path: '',
          id_photo: '',
          type: "admin",
        },
        {
          name: 'Maria',
          surname: 'DB',
          email: 'mariadb@scorpion.com',
          birth_date: 'date',
          password: 'maria123',
          cpf: 12345678912,
          phone_number: 11947888880,
          avatar_path: '',
          id_photo: '',
          type: "admin",
        },
        {
          name: 'Fernando',
          surname: 'Uncle',
          email: 'fernando@scorpion.com',
          birth_date: 'date',
          password: 'fernando123',
          cpf: 12345678910,
          phone_number: 11947888889,
          avatar_path: '',
          id_photo: '',
          type: "admin",
        },
        {
          name: 'Fernando',
          surname: 'Uncle',
          email: 'fernando@scorpion.com',
          birth_date: 'date',
          password: 'fernando123',
          cpf: 12345678910,
          phone_number: 11947888889,
          avatar_path: '',
          id_photo: '',
          type: "admin",
        },


      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};