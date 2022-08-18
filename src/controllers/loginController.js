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
      
      req.session.usuarioLogado = user.email, user.id, user.name
      res.cookie('user', JSON.stringify({ id: user.id, name: user.name, email: user.email, type: user.type }));

      return res.redirect('/')

    }).catch(error => res.send(error.error))
  }
}

// const loginController = {
//     getLoginPage: (req, res) => {
//       res.render('login');
//     },
//     loginUser: (req, res) => {
//       const { email, password } = req.body;

//       database.Users.findOne({
//         where: {
//           email,
//         },
//       }).then(user => {

//         if (!user) {
//           alert('User does not exist');
//           res.redirect('/login');
//         }

//         if (bcrypt.compare(password, user.password)) {
//           res.cookie('user', JSON.stringify({ id: user.id, name: user.name, type: user.type }));

//           res.redirect('/users');
//         }

//         res.render('/login');
//       }).catch(error => console.log(error));
//     }
//   }


module.exports = loginController