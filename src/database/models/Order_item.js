module.exports = function (sequelize, DataTypes) {

    const OrderItem = sequelize.define('order_items', {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'user_id',
        },

        orderId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'order_id',
        },

        productId: {
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
    }, {
        timestamps: false,
        tableName: 'order_items',
    }),

    Order_item.associate = (models) => {
        Order_item.belongsTo(models.Order);
        Order_item.belongsTo(models.Product);
    };


    return Order_item;
};