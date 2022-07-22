module.exports = (sequelize, DataTypes) => {
    const alias = "Users";

    const collumns = {
        id: {
            type: DataTypes.Integer(11),
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
            type: DataTypes.DATE,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        cpf: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.INTEGER(20),
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
            type: dataTypes.ENUM,
            values: ["user", "admin"],
            allowNull: false,
            defaultValue: "user"
        },

    };
    const config = {
        tableName: "users",
        timestamps: false,
    };

    const User = sequelize.define(alias, collumns, config);

    User.associate = (models) => {
        User.hasOne(models.Adress, {
                as: "addresses",
            }),
            User.hasMany(models.Order, {
                as: "orders",
            });
    }



    return User;
}