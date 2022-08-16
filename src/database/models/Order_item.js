module.exports = function (sequelize, DataTypes) {
    const alias = "Order_item";

    const columns = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
        },

        user_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'user_id',
        },

        order_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id',
        },

        product_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'product_id',
        },

        price: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },

        quantity: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
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
            tableName: 'order_items',
            timestamps: false,  
    };

    const Order_item = sequelize.define(alias, columns, config);

    Order_item.associate = (models) => {
        Order_item.belongsTo(models.Orders, {as: 'Orders', foreignKey: 'id'});
        Order_item.belongsTo(models.Products, {as: 'Products', foreignKey: 'product_id'});
    };


    return Order_item;
};