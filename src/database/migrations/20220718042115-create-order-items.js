'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('order_items', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            total: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },

            user_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            product_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'products',
                    key: 'id'
                }
            },
            quantity: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            order_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'orders',
                    key: 'id'
                }
            },

            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('order_items');
    }
};