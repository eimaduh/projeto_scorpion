const usersController = {
    getUsersPage: (req, res) => {
        res.render('painelUsuario')
    },
    getUsersData: (req, res) => {
        res.render('data')
    },
    getUsersAddress: (req, res) => {
        res.render('address')
    },
    editAddress: (req, res) => {
        res.render('editAddress')
    }
}

module.exports = usersController