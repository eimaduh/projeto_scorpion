module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    preco: {
      type: DataTypes.INTEGER(15),
      allowNull: false
    },
    quantidade_disponivel: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    em_promocao: {
      type: DataTypes.STRING(1),
      allowNull: false,
      default: DataTypes.STRING(S)
    },
    especificacao: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
  }, { tablename: 'products' })

  Products.associate = (models) => {
    Products.belongsToMany(models.Sales, {
      constraint: true,
      foreignKey: 'sales_id'
    });
    Products.hasOne(models.Brands, {
        constraint: true,
        foreignKey: 'brands_id'
    });
    
  }

  return Products
}