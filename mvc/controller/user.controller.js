const User = require("../model/user.model")

const getuser = async (req, res) => {
    let data = await User.find()
    res.send(data)
}

const postuser = async (req, res) => {
    let { email, password, username } = req.body
    let isExist = await User.findOne({ email })
    if (isExist) {
        return res.send({ msg: "user already exists" })
    }
    else {
        let data = await User.create(req.body)
        res.send(data)
    }
}

const login = async (req, res) => {
    let { email, password, } = req.body
    let isExist = await User.findOne({ email })
    if (!isExist) {
        return res.send({ msg: "user not found" })
    }
    if (isExist.password != password) {
        return res.send({ msg: "Incorrect Password" })
    }
    else {
        res.send({ msg: "Login Successful", user: isExist })
    }
}

module.exports = { getuser, postuser, login };
