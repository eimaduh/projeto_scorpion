const database = require("../database/models");
const path = require("path");

const registerController = {
 getRegistrationPage: (req, res) => {
  res.render('register')
 },
 


}

module.exports = registerController;