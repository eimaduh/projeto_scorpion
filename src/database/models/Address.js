module.exports = (sequelize, DataTypes) => {
  const alias = "Address";

  const columns = {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
       street: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    number: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    district: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    zipcode: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
  };
  const config = {
    tableName: "addresses",
    timestamps: false,
  };

  const Address = sequelize.define(alias, columns, config);

  Address.associate = (models) => {
    Address.belongsTo(models.Users, {onDelete: 'cascade', onUpdate: 'cascade', as: 'Users', foreignKey: 'userId'})
  };

  return Address;
}