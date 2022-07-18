module.exports = (sequelize, DataTypes) => {
    const Brand_category = sequelize.define('brands_categories', {

        brandId: {
            type: DataTypes.INTEGER(11),
            field: 'brandId',
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
        tableName: 'brands_categories',
        timestamps: false,
        classMethods: {
            associate(models) {
                brand_category.belongsTo(models.brand, {as: 'brand', foreignKey: 'brand_id'});
                brand_category.belongsTo(models.Category, {as: 'category', foreignKey: 'category_id'});
            },
        },
    });

    return Brand_category;
};