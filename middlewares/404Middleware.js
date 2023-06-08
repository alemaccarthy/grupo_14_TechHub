function Middleware404(req, res, next) {
    res.status(404).render('error');
}

module.exports = Middleware404;