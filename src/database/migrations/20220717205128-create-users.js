'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,

      },
      surname: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      birth_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      phone_number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      avatar_path: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      id_photo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        default: Sequelize.NOW
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM,
        values: ['user', 'admin'],
        allowNull: false,
        defaultValue: 'user'

      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};