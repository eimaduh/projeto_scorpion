
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('products', {
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
    }, {tableName: 'products'});


    Product.associate = (models) => {
        Product.hasMany(models.ProductImage, {as: 'images'});
        Product.belongsToMany(models.Category, {
            through: models.Product_category,
            foreignKey: 'productId',
            otherKey: 'categoryId',
        });
        Product.belongsToMany(models.Brand, {
            through: models.Product_brand,
            foreignKey: 'productId',
            otherKey: 'brandId'
        });

    };
}