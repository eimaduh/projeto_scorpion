module.exports = (sequelize, DataTypes) => {
    const alias = "Products";

    const collumns = sequelize.define('products', {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: STRING(50),
            allowNull: false,
        },
        description: {
            type: TEXT,
        },
        price: {
            type: DECIMAL(20, 2),
            allowNull: false,
        },
        stock: {
            type: INTEGER(11),
            allowNull: false,
        },
        createdAt: {
            type: DATE,
            allowNull: false,
            defaultValue: new Date(),
            field: 'created_at'
        },
        updatedAt: {
            type: DATE,
            allowNull: false,
            defaultValue: new Date(),
            field: 'updated_at'
        },
    }, {
        tableName: 'products'
    });

    const Product = sequelize.define(alias, collumns, config);

    Product.associate = (models) => {
        Product.hasMany(models.Order, {
            as: "orders",
        });

    };
}