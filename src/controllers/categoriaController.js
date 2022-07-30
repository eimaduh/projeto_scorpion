const { Products}  = require("../database/models/Product");

const categoriaController = {
    getCategoryPage: (req, res) => {
        Products.findAll().then( products => {
            res.render('categoria', { products})
          })
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

        Products.create({
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
    edit: (req, res) => {
        const productId = req.params.id;

        Products.findByPk(productId)
            .then(product => {
                res.render('productEdit', {
                    product
                })
            })
            .catch(error => res.send(error))
    },
    update: (req, res) => {
        const productId = req.params.id;
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

        Products.update({
                name,
                description,
                specification,
                price,
                stock,
                sale,
                brand,
                category
            }, {
                where: {
                    id: productId
                }
            })
            .then(() => {
                return res.redirect('/product')
            })
            .catch(error => res.send(error))

    },
}


module.exports = categoriaController;