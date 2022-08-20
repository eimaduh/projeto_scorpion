const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {Address, Users, Orders, OrderItems, Products } = require("../database/models");

const orderItemsController = {
    seeDetails: (req, res) => {
        const user = req.user;
        OrderItems.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }, include: [
                {
                  model: Users,
                  as: 'Users',
                  where: {
                    id: user.id
                }
                },
            ],
        }).then((orderItems) => {
            res.status(200).render('usersRequests', {
                orderItems,
                user, Products
            })
        }).catch((error) => res.status(500).send(error));
    },
    
}

module.exports = orderItemsController;