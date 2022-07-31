module.exports = (sequelize, DataTypes) => {
  const alias = "Address";

  const columns = {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    street: {
      type: DataTypes.STRING(1000),
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
    zipcode: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
  };
  const config = {
    tableName: "addresses",
    timestamps: false,
  };

  const Address = sequelize.define(alias, columns, config);

  Address.associate = (models) => {
    Address.belongsTo(models.Users, {as: 'Users', foreignKey: 'user_id'})
  };

  return Address;
}