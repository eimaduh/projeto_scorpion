const database = require("../database/models");
const {
    Address,
    Users,
    Orders,
    Data
} = require("../database/models");


const usersController = {
    getUsersPage: (req, res) => {

        Users.findOne({
                where: {
                    email: req.session.usuarioLogado
                }
            })
            .then(users => {
                res.render('usersPanel', {
                    users
                })
            })
    },
    getUsersData: (req, res) => {
        const user = req.user;
        Data.findAll({
            include: {
                model: Users,
                as: 'Users',
            },
            where: {
                userId: user.id
            }
        }).then(data => {
            res.status(200).render('data', {
                data,
                user
            })
        });
    },
    getUsersAddress: (req, res) => {
        const user = req.user;
        Address.findAll({
            include: {
                model: Users,
                as: 'Users',
            },
            where: {
                userId: user.id
            }
        }).then(address => {
            res.status(200).render('address', {
                address,
                user
            })
        });
    },

    createAddress: (req, res) => {
        const user = req.user;
        const {
            userId,
            street,
            number,
            district,
            city,
            zipcode,
            country
        } = req.body;

        Address.create({
                userId: user.id,
                street,
                number,
                district,
                city,
                zipcode,
                country
            }).then(() => {
                return res.status(200).json
            })
            .catch(error => res.send(error))
    },
    editAddress: (req, res) => {
        const addressId = req.params.id;

        Address.findByPk(addressId)
            .then(address => {
                res.render('editAddress', {
                    address
                })
            })
            .catch(error => res.send(error))
    },
    updateAddress: (req, res) => {
        const user = req.user;
        const addressId = req.params.id;
        const {
            userId,
            street,
            number,
            zipcode,
            district,
            city,
            country,
        } = req.body;
        req.file;

        Address.update({
                userId: user.id,
                street,
                number,
                zipcode,
                district,
                city,
                country,
            }, {
                where: {
                    id: addressId,
                }
            })
            .then(() => {
                return res.redirect('/users/address')
            })
            .catch(error => res.send(error))

    },


    usersCredits: (req, res) => {
        res.render('usersCredits')
    },
    usersRequests: (req, res) => {
        const user = req.user;
        Orders.findAll({
            include: {
                model: Users,
                as: 'Users',
            },
            where: {
                userId: user.id
            }
        }).then(orders => {
            res.status(200).render('usersRequests', {
                orders,
                user
            })
        });
    },
}

module.exports = usersController