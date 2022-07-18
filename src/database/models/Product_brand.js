module.exports = (sequelize, DataTypes) => {
    const Product_brand = sequelize.define('products_brands', {

        productId: {
            type: DataTypes.INTEGER(11),
            field: 'productId',
        },
        brandId: {
            type: DataTypes.INTEGER(11),
            field: 'brandId'
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date(),
            field: 'created_at'
        },
    }, {
        tableName: 'products_brands',
        timestamps: false,
        classMethods: {
            associate(models) {
                Product_brand.belongsTo(models.Product, {as: 'product', foreignKey: 'product_id'});
                Product_brand.belongsTo(models.brand, {as: 'brand', foreignKey: 'brand_id'});
            },
        },
    });

    return Product_brand;
};