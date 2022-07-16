
const usersController = {
    getUsersPage: (req, res) => {
        res.render('usersPanel')
    },
    usersStore: (req, res) => {
        const { name, surname, email, birth_date, password, cpf } = req.body;
        const user = User.create({ name, surname, email, birth_date, password, cpf });
        return res.json(user);
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