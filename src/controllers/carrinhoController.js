const {Address, Users, Orders, OrderItems } = require("../database/models");

const carrinhoController = {
    getCartPage: (req, res) => {
        res.render('carrinho')
    },

}

module.exports = carrinhoController