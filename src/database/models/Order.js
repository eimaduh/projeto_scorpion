module.exports = function (sequelize, DataTypes) {
    const alias = "Orders";

    const columns =  {

        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'userId',
        },
        orderStatus: {
            type: DataTypes.STRING(30),
            field: 'order_status',
        },
        total: {
            type: DataTypes.INTEGER(15),
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
        timestamps: false,
        tableName: 'orders',
    };

    const Order = sequelize.define(alias, columns, config);

    Order.associate = (models) => {
        Order.hasMany(models.Order_item, {as: 'Order_Item', foreignKey: 'order_item_id'});
        Order.belongsTo(models.Users, {as: 'Users', foreignKey: 'user_id'});

    };

    return Order;
};