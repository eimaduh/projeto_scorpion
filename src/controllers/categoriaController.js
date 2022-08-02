const database = require("../database/models");
const path = require("path");

const categoriaController = {
    getCategoryPage: (req, res) => {
        database.Products.findAll()
            .then(products => {
                res.render('categoria', {
                    products
                })
            })

    },
    getById: (req, res) => {
        database.Products.findByPk(req.params.id)
            .then(products => {
                res.render('details', {
                    products
                })
            })
    },
    getCategoryAdminPage: (req, res) => {
        res.render('produtosAdmin')
    },
    create: (req, res) => {
        const { name, description, specification, price, stock, sale, brand, category} = req.body;

        database.Products.create({
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

        database.Products.findByPk(productId)
            .then(product => {
                res.render('productEdit', {
                    product
                })
            })
            .catch(error => res.send(error))
    },
    update: (req, res) => {
        const productId = req.params.id;
        const { name, description, specification, price, stock, sale, brand, category} = req.body;

        database.Products.update({
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
                return res.redirect('/categoria/admin')
            })
            .catch(error => res.send(error))

    },
    delete: (req, res) => {
        database.Products.destroy(
            {
                where: {id: req.params.id}
            }
            .then(() => {
                return res.redirect('/categoria/admin')
            })
            .catch(error => res.send(error))

        )
    }
}


module.exports = categoriaController;