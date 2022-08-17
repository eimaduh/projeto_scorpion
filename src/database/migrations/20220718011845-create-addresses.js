'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('addresses', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
           street: {
                type: Sequelize.STRING,
                allowNull: false
            },
            number: {
                type: Sequelize.STRING,
                allowNull: false
            },
            district: {
              type: Sequelize.STRING,
              allowNull: false
          },
            city: {
                type: Sequelize.STRING,
                allowNull: false
            },
            
            country: {
                type: Sequelize.STRING,
                allowNull: false
            },
            zipcode: {
                type: Sequelize.STRING,
                allowNull: false
            },

            userId: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date(),
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date(),
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('addresses');
    }
};
