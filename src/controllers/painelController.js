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
    createData: (req, res) => {
        const user = req.user;
        const {
            cpf,
            phone_number,
            avatar_path,
            id_photo,
            userId
        } = req.body;
        const { path } = req.file;
      
        Data.create({
            cpf,
            phone_number,
            avatar_path: path,
            id_photo: path,
            userId: user.id
        })
         .then(() => {
          return res.redirect('/users/data');
         })
         .catch(error => res.send(error))
       },
       editData: (req, res) => {
        const dataId = req.params.id;
      
        Data.findByPk(dataId)
         .then(data => {
          res.render('dataEdit', {
           data
          })
         })
         .catch(error => res.send(error))
       },
       updateData: (req, res) => {
        const dataId = req.params.id;
        const user = req.user;
        const {
            cpf,
            phone_number,
            avatar_path,
            id_photo,
            userId
        } = req.body;
      
        Data.update({
            cpf,
            phone_number,
            avatar_path: req.file,
            id_photo: req.file,
            userId: user.id,
        },{
            where: {
                id: dataId,
            }
        })
         .then(() => {
          return res.redirect('/users/data')
         })
         .catch(error => console.log(error))
      
       },
       deleteData: (req, res) => {
        database.Data.findByPk(req.params.id)
         .then(data => {
          res.render('dataDelete', {
           data 
          })
         })
       },
       destroyData: (req, res) => {
        database.Data.destroy({
         where: {
          id: req.params.id
         },
         force: true
        })
         .then(() => {
          return res.redirect('/users')
         })
         .catch(error => res.send(error))
      
      
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
    getAddressPage: (req, res) => {
        res.render('createAddress')
    },
    createAddress: (req, res) => {
        const user = req.user;
        const {
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
    updateAddress: (req, res,) => {
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