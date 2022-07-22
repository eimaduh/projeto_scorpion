'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            descripcion: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false,
            },
            specification: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            stock: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            sale: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            image_path: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            brand: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            category: {
                type: Sequelize.STRING,
                allowNull: false,
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
        return queryInterface.dropTable('products');
    }
};