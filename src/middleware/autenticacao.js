function auth(req, res, next) {
  if (req.session.usuarioLogado) {
    return next()
  } else {
    // return res.redirect('/login');
    return res.send('Você não está logado no sistema')
  }
}

module.exports = auth