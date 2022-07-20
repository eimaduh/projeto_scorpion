const loginController = {
    getLoginPage: (req, res) => {
        res.render('login')
    },

    getRegistrationPage: (req, res) => {  
        res.render('register')
    }

}

module.exports = loginController