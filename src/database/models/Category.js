module.exports = function (sequelize, DataTypes) {
    const Category = sequelize.define('categories', {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(50),
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
    }, {
        timestamps: false,
        tableName: 'categories',
    });

    Category.associate = (models) => {
        Category.belongsToMany(models.Product, {through: models.Product_category});
    };

    return Category;
};