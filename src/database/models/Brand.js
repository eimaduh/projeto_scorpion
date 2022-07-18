module.exports = (sequelize, DataTypes) => {
    const Brand = sequelize.define('brands', {
        id: {
                type: Sequelize.INTEGER(11)
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            name: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
        });

    Brand.associate = (models) => {
        Brand.belongsToMany(models.Product, {through: models.Product_brand});
        Brand.hasMany(models.Brand_image, {as: 'images'});
    };
    return Brand;
};