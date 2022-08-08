module.exports = (sequelize, DataTypes) => {
    const alias = "Products";

    const columns = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        specification: {
            type: DataTypes.TEXT,
        },
        price: {
            type: DataTypes.DECIMAL(20, 2),
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        sale: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        image_path: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date(),
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date(),
            field: 'updated_at'
        },
    };
    const config = {
        tableName: 'products',
        timestamps: false,
    };

    const Product = sequelize.define(alias, columns, config);

    Product.associate = (models) => {
        Product.hasMany(models.Orders, { as: "orders", foreignKey: "order_id" });

    };
    return Product;
}