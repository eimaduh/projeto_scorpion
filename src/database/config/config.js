module.exports = {
  development: {
    username: "root",
    password: "",
    database: "pi_scorpion",
    host: "localhost",
    dialect: "mysql",
    define: {
      timestamps: false,
      underscore: true,
    },    
  },
  test: {
    username: "root",
    password: "null",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: "null",
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  },
};

