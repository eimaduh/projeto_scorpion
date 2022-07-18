module.exports = (sequelize, DataTypes) => {
    const ProductCategory = sequelize.define('products_categories', {

        productId: {
            type: DataTypes.INTEGER(11),
            field: 'productId',
        },
        categoryId: {
            type: DataTypes.INTEGER(11),
            field: 'categoryId'
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date(),
            field: 'created_at'
        },
    }, {
        tableName: 'products_categories',
        timestamps: false,
        classMethods: {
            associate(models) {
                ProductCategory.belongsTo(models.Product, {as: 'product', foreignKey: 'productId'});
                ProductCategory.belongsTo(models.Category, {as: 'category', foreignKey: 'categoryId'});
            },
        },
    });

    return ProductCategory;
};