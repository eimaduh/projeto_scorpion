const { Users } = require('../database/models');
const bcrypt = require('bcrypt');

const logoutController = {
  logout: (req, res) => {
    req.session.destroy()
    res.clearCookie('user');
    res.redirect('/');
  }
}

module.exports = logoutController;