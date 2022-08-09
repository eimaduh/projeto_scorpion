
const usersController = {
    getUsersPage: (req, res) => {
        res.render('usersPanel')
    },
    getUsersData: (req, res) => {
        res.render('data')
    },
    getUsersAddress: (req, res) => {
        res.render('address')
    },
    editAddress: (req, res) => {
        res.render('editAddress')
    },
    usersCredits: (req, res) => {
        res.render('usersCredits')
    },
    usersRequests: (req, res) => {
        res.render('usersRequests')
    }
}

module.exports = usersController