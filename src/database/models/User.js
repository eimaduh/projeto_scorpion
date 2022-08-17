module.exports = (sequelize, DataTypes) => {
    const alias = "Users";

    const columns = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        first_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        type: {
          type: DataTypes.ENUM,
          values: ['user', 'admin'],
          allowNull: false,
          defaultValue: 'user'
  
        },
        created_at: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: new Date(),
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: new Date(),
        }

    };
    const config = {
        tableName: "users",
        timestamps: false,
    };

    const User = sequelize.define(alias, columns, config);

    User.associate = (models) => {
            User.hasMany(models.Orders, {as: "orders", foreignKey: "id"});
            User.hasOne(models.Address, {as: "Addresses", foreignKey: "id"});
            
    };



    return User;
}