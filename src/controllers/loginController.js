const database = require("../database/models");
const path = require("path");
const bcrypt = require("bcrypt");

const loginController = {
 getLoginPage: (req, res) => {
  res.render('login')
 },
 loginUser: (req, res) => {
  const {email, password} = req.body
  database.Users.findOne({
   where: { email },
  }).then(user => {
   if (!user) {
    console.log("Este Usuário não existe burro!")
    res.redirect("/login")
   } if (bcrypt.compare(password, user.password)) {
    res.redirect("/users")
   }
  }).catch(error =>
   console.log("error")
  )
 }
}




module.exports = loginController