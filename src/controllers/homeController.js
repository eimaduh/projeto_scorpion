const database = require("../database/models");
const path = require("path");

const homeController = {
  getHomePage: (req, res) => {
    database.Products.findAll()
      .then(products => {
        res.render('home', {
          products
        })
      })
  }
}

module.exports = homeController