module.exports = (sequelize, DataTypes) => {
    const alias = "Register";

    const columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        email: {
           type: DataTypes.STRING(100),
           allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    };
    const config = {
        tableName: 'user_register',
        timestamps: false,
    };

    const Register = sequelize.define(alias, columns, config);

    return Register;

};

