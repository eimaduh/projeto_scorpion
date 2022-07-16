module.exports = (sequelize, DataTypes) => {
  const Addresses = sequelize.define('Addresses', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    logradouro: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    numero: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    complemento: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    bairro: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    cep: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    cidade: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    cidade: {
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

