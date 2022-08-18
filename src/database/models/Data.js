module.exports = (sequelize, DataTypes) => {
    const alias = "Data";
  
    const columns = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER(11)
          },
          cpf: {
            type: DataTypes.STRING(11),
            allowNull: false,
          },
          phone_number: {
            type: DataTypes.STRING(15),
            allowNull: false,
          },
          avatar_path: {
            type: DataTypes.STRING,
            allowNull: false
          },
          id_photo: {
            type: DataTypes.STRING,
            allowNull: false
          },
          userId: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
              model: 'users',
              key: 'id'
            }
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
          tableName: "data",
          timestamps: false,
        };
      
      
    const Data = sequelize.define(alias, columns, config);
  
    Data.associate = (models) => {
      Data.belongsTo(models.Users, {onDelete: 'cascade', onUpdate: 'cascade', as: 'Users', foreignKey: 'userId'})
    };
  
    return Data;
  }