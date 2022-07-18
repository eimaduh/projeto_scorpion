module.exports = function(sequelize, DataTypes){
        let alias = "User",
        let cols = {
            id: {
                type.DataTypes.Integer,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            nome: {
                type: DataTypes.STRING(255),
                allowNull: true,

            },
            segundo_nome: {
                type: DataTypes.STRING(45),
                allowNull: true,

            },
            email: {
            type: DataTypes.STRING(45),
            allowNull: false
            },
            data_nascimento: {
            type: DataTypes.DATE,
            allowNull: false
            },
            senha: {
            type: DataTypes.STRING(45),
            allowNull: false    
            },
            data_criacao: {
            type: DataTypes.DATETIME,
            allowNull: false,
            default: DataTypes.NOW
            },
            cpf: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
            }

        }

    let users = sequelize.define(alias, cols, config);
    return User;
}