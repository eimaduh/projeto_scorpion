const categoriaController = {
    getCategoryPage: (req, res) => {
        res.render('categoria')
    },
    getCategoryAdminPage: (req, res) => {
        res.render('produtosAdmin')
    }
}

module.exports = categoriaController