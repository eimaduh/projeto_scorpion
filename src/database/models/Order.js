module.exports = function (sequelize, DataTypes) {
    const alias = "Orders";

    const columns =  {

        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'userId',
        },
        addressId: {
            type: DataTypes.INTEGER,
            field: 'addressId',
            references: {
                model: 'Addresses',
                key: 'id'
            }
        },
        orderStatus: {
            type: DataTypes.STRING(30),
            field: 'order_status',
            defaultValue: 'Separando'
        },
        total: {
            type: DataTypes.INTEGER(15),
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date(),
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date(),
        },
    };
    const config = {
        timestamps: false,
        tableName: 'orders',
    };

    const Order = sequelize.define(alias, columns, config);

    Order.associate = (models) => {
        Order.hasMany(models.OrderItem, {as: 'OrderItems', foreignKey: 'orderItemId'});
        Order.belongsTo(models.Users, {as: 'Users', foreignKey: 'userId'});
        Order.belongsTo(models.Address, {as: 'Addresses', foreignKey: 'addressId'});

    };

    return Order;
};