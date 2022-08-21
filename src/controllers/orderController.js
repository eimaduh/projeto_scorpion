const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {Address, Users, Orders, OrderItems, Products } = require("../database/models");

const orderController = {
    getAll: (req, res) => {
        const user = req.user;

        Orders.findAll({
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
           
        }).then((orders) => {
            res.status(200).render('usersRequests', {
                orders,
                user,
            })
        }).catch((error) => res.status(500).send(error));
    },
    createOrder: (req, res) => {
        const user = req.user;
        const {
            orderStatus,
            total,
        } = req.body;
        Orders.create({
            userId: user.id,
            addressId: Address.id,
            orderStatus,
            total

        }).then(() => {
            return res.status(200).json
        })
    },


 createOrderItem: (req, res) => {
    
 }}

module.exports = orderController;