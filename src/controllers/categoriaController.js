const Product  = require("../database/models/Product")
const categoriaController = {
    getCategoryPage: (req, res) => {
        res.render('categoria')
    },
    getCategoryAdminPage: (req, res) => {
        res.render('produtosAdmin')
    },
    create: (req, res) => {
        const {
            name,
            description,
            specification,
            price,
            stock,
            sale,
            brand,
            category
        } = req.body;

        database.Product.create({
                name,
                description,
                specification,
                price,
                stock,
                sale,
                brand,
                category
            })
            .then(() => {
                return res.redirect('/categoria/admin')
            })
            .catch(error => res.send(error))
    },
}


module.exports = categoriaController