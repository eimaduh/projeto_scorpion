module.exports = (sequelize, DataTypes) => {
    const Product_category = sequelize.define('products_categories', {

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
                Product_category.belongsTo(models.Product, {as: 'product', foreignKey: 'product_id'});
                Product_category.belongsTo(models.Category, {as: 'category', foreignKey: 'category_id'});
            },
        },
    });

    return Product_category;
};