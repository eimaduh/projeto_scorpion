module.exports = function (sequelize, DataTypes) {
    const Order = sequelize.define('orders', {

        id: {
            type: INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },

        userId: {
            type: INTEGER(11),
            allowNull: true,
            field: 'userId',
        },

        addressId: {
            type: DataTypes.INTEGER(11),
            field: 'addressId',
            references: {
                model: 'Address',
                key: 'id'
            }
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
    }, {
        timestamps: false,
        tableName: 'orders',
    });

  Order.associate = (models) => {
        Order.hasMany(models.Order_Item);
        Order.belongsTo(models.User, {foreignKey: 'user_id'});
        Order.belongsTo(models.Address, {foreignKey: 'address_id'});
    };

    return Order;
};