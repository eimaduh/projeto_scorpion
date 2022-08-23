function auth(req, res, next) {
  if (req.session.usuarioLogado) {
    return next()
  } else {
    return res.render('errorLogin')
}
}
module.exports = auth
