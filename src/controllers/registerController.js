const database = require("../database/models");
const path = require("path");
const bcrypt = require("bcrypt");

const registerController = {
    getRegistrationPage: (req, res) => {
        res.render('register')
    },
    create: (req, res) => {
        const {
            first_name,
            last_name,
            email,
            password,
        } = req.body;

        const passwordHash = bcrypt.hashSync(password, 10);

        database.Users.create({
            first_name,
            last_name,
            email,
            password: passwordHash,
        })
            .then(() => {
                return res.redirect('/login');
            })
            .catch(error => res.send(error))
    },

    delete: (req, res) => {
        database.Users.findByPk(req.params.id)
         .then(users => {
          res.render('deleteUser', {
           users 
          })
         })
       },
       destroy: (req, res) => {
        database.Users.destroy({
         where: {
          id: req.params.id
         },
         force: true
        })
         .then(() => {
          return res.redirect('/')
         })
         .catch(error => res.send(error))
    }
}

module.exports = registerController;