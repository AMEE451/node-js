const isLogin = (req, res, next) => {
    let name = req.cookies.username
    let id = req.cookies.user_id
    if (name && id) {
        next()
    }
    else {
        res.redirect("/login")
    }
}
module.exports = isLogin