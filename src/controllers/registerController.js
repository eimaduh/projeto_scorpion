const database = require("../database/models");
const path = require("path");
const bcrypt = require("bcrypt");

const registerController = {
    getRegistrationPage: (req, res) => {
        database.Users.findAll()
        res.render('register')
    },
    create: (req, res) => {
        const {
         name,
         email,
         password,
        } = req.body;

        const passwordHash = bcrypt.hashSync(password, 10);
      
        database.Users.create({
         name,
         email,
         password : passwordHash,
        })
         .then(() => {
          return res.redirect('/login');
         })
         .catch(error => res.send(error))
       }
 


}

module.exports = registerController;