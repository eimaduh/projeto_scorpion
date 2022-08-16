const database = require("../database/models");
const {Address} = require("../database/models");
const {
    Users
} = require("../database/models");
const {
    Orders
} = require("../database/models")

const usersController = {
    getUsersPage: (req, res) => {
        res.render('usersPanel')
    },
    getUsersData: (req, res) => {

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
    getUsersAddress: async (req, res) => {
        try {
            const request = await Address.findAll({
                where: {
                    id: req.session.usuarioLogado
                },
                include: {
                    model: Users,
                    as: 'Users'
                },
            })
            return res.render('address', {
                Address
            
            })
        } catch (err) {
            console.log(err)
        };
        res.render('address');

    },
    editAddress: (req, res) => {
        res.render('editAddress')
    },
    usersCredits: (req, res) => {
        res.render('usersCredits')
    },
    usersRequests: async (req, res) => {
        try {
            const request = await Orders.findAll({
                where: {
                    id: req.session.usuarioLogado
                },
                include: {
                    model: Users,
                    as: 'Users'
                },
            })
            return res.render('usersRequests', {
                request
            })
        } catch (err) {
            console.log(err)
        };
    }
}

module.exports = usersController