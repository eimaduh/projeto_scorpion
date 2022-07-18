module.exports = (sequelize, DataTypes) => {
  const Addresses = sequelize.define('Address', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'users', 'id' },
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
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
  
  }, { tablename: 'address' })

  Addresses.associate = (models) => {
    Addresses.belongsTo(models.Users, {
      constraint: true,
      foreignKey: 'id'
    }),
    Addresses.belongsTo(models.Sales, {
      constraint: true,
      foreignKey: 'id'
    })
  }

  return Addresses;
}

