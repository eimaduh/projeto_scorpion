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
  database.Products.findAll()
   .then(products => {
    res.render('categoriaAdmin', {
     products
    })
   })

 },
 getSuccessPage: (req, res) => {
  res.render('successPage')
 },
 add: (req, res) => {
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
  const { path } = req.file;

  database.Products.create({
   name,
   description,
   specification,
   price,
   stock,
   sale: Number(sale),
   image_path: path,
   brand,
   category
  })
   .then(() => {
    return res.redirect('/categoria/admin/sucesso');
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
  const {
   path
  } = req.file;

  database.Products.update({
   name,
   description,
   specification,
   price,
   stock,
   sale: Number(sale),
   image_path: path,
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
  database.Products.findByPk(req.params.id)
   .then(products => {
    res.render('productDelete', {
     products 
    })
   })
 },
 destroy: (req, res) => {
  database.Products.destroy({
   where: {
    id: req.params.id
   },
   force: true
  })
   .then(() => {
    return res.redirect('/categoria/admin')
   })
   .catch(error => res.send(error))


 }
}


module.exports = categoriaController;