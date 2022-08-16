const database = require("../database/models");
const path = require("path");
const bcrypt = require("bcrypt");

const registerController = {
    getRegistrationPage: (req, res) => {
        database.Register.findAll()
        res.render('register')
    },
    create: (req, res) => {
        const {
         name,
         email,
         password,
        } = req.body;

        const passwordHash = bcrypt.hashSync(password, 10);
      
        database.Register.create({
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