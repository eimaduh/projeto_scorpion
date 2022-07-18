module.exports = (sequelize, DataTypes) => {
        const alias = "Users",

        const collumns = {
            id: {
                type.DataTypes.Integer,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING(255),
                allowNull: true,

            },
            surname: {
                type: DataTypes.STRING(45),
                allowNull: true,

            },
            email: {
            type: DataTypes.STRING(45),
            allowNull: false
            },
            birth_date: {
            type: DataTypes.DATE,
            allowNull: false
            },
            password: {
            type: DataTypes.STRING(45),
            allowNull: false    
            },
            cpf: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
            },
            type: {
            type: dataTypes.ENUM,
            values: ["user", "admin"],
            allowNull: false,
            defaultValue: "user"
    }

        };
        const config = {
        tableName: "users",
        timestamps: false,
  }
    
  //Users.associate = ({ Adresses }) => {
   // Users.hasOne(models.Adresses, {
    //   as: "adresses",
  //  }),
  //  Users.hasMany(models.Sales, {
       as: "sales",
   // });
  //}


    const users = sequelize.define(alias, collumns, config);
    return User;
}