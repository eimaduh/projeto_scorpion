module.exports = function(sequelize, DataTypes){
        let alias = "Sales",
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
        const config = {
        tableName: "sales",
        timestamps: true,
  }

  const Sales = sequelize.define(alias, cols, config);
    
  Sales.associate = ({ Adresses }) => {
    Saless.hasOne(models.Adresses, {
       as: "id",
    }),
    Sales.belongsTo(models.Users, {
       foreignKey: "id",
    });
  }


    let users = sequelize.define(alias, cols, config);
    return User;
}