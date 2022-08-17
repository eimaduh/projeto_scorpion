'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('user_register', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },

            email: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('user_register');
    }
};