'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',
      [{
          first_name: 'Lucas',
          last_name: 'Aboud',
          email: 'lucas@scorpion.com',
          password: 'lucas123',
          type: "admin",          
        },
        {
          first_name: 'Maria',
          last_name: 'DB',
          email: 'mariadb@scorpion.com',       
          password: 'maria123',
          type: "admin",
        },
        {
          first_name: 'Claudio',
          last_name: 'Souza',
          email: 'claudio@email.com',
          password: 'claudio123',
          type: 'user',
        },
        {
          first_name: 'Fernando',
          last_name: 'Uncle',
          email: 'fernando@scorpion.com',
          password: 'fernando123',
          type: "admin",
        },


      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};