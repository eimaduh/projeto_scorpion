module.exports = (sequelize, DataTypes) => {
  const alias = "Address";

  const collumns = sequelize.define('Address', {
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
  }, {
    tablename: 'address'
  });

  const Address = sequelize.define(alias, collumns, config);

  Address.associate = (models) => {
    Address.belongsTo(models.User, {
      constraint: true,
      foreignKey: 'id'
    })
  };

  return Address;
}