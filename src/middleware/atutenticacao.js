


function auth(req, res, next) {
  const usuarioLogado = Boolean(req.session.user) || Boolean(req.user)

  if (usuarioLogado) {
    return next();
  }

  return res.send('Você não está logado no sistema')
}

module.exports = auth;
