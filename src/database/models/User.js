module.exports = (sequelize, DataTypes) => {
    const alias = "Users";

    const columns = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,

        },
        surname: {
            type: DataTypes.STRING(45),
            allowNull: false,

        },
        email: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        birth_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        cpf: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        avatar_path: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        id_photo: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        type: {
            type:  DataTypes.ENUM,
            values: ["user", "admin"],
            allowNull: false,
            defaultValue: "user"
        },

    };
    const config = {
        tableName: "users",
        timestamps: false,
    };

    const User = sequelize.define(alias, columns, config);

    User.associate = (models) => {
        User.hasOne(models.Address, { as: "addresses", foreignKey: "address_id"}),
            User.hasMany(models.Orders, {as: "orders", foreignKey: "order_id"});
            
    };



    return User;
}