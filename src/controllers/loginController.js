const database = require("../database/models");
const path = require("path");
const bcrypt = require("bcrypt");

const loginController = {
  getLoginPage: (req, res) => {
    res.render('login',  { error: ''})
  },

  loginUser: (req, res) => {
    const { email, password } = req.body
    const error = 'Email ou senha incorreto'
    database.Users.findOne({
      where: { email },
    }).then(user => {
      if(!user) {
        return res.render("login", { error })
      }

      if(!bcrypt.compareSync(password, user.password)) {
        return res.render("login", { error })
      }
      
      req.session.usuarioLogado = user.email, user.id, user.first_name, user.last_name
      res.cookie('user', JSON.stringify({ id: user.id, first_name: user.first_name, last_name: user.last_name, email: user.email, type: user.type }));

      return res.redirect('/')

    }).catch(error => res.send(error.error))
  }
}

module.exports = loginController