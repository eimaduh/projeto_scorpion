const database = require("../database/models");

const usersController = {
    getUsersPage: (req, res) => {
        res.render('usersPanel')
    },
    getUsersData: async (req, res) => {
        const user = await database.Users.findAll()
        const enderecos = await database.Enderecos.findAll()

        res.render('asdasda', {
            user,
            enderecos
        })

        database.Users.findOne({
            where: {
                email: req.session.usuarioLogado
            }
        })
            .then(users => {
                res.render('data', {
                    users
                })
            })
    },
    getUsersAddress: (req, res) => {

        res.render('address');

    },
    editAddress: (req, res) => {
        res.render('editAddress')
    },
    usersCredits: (req, res) => {
        res.render('usersCredits')
    },
    usersRequests: (req, res) => {
        res.render('usersRequests')
    }
}

module.exports = usersController