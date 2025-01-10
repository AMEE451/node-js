const User = require("../model/user.model")
const jwt=require("jsonwebtoken")
const bcrypt = require("bcrypt")
require("dotenv").config()

exports.createUser = async (req, res) => {
    const { email, password } = req.body
    try {
        let isUserExists = await User.findOne({ email: email })
        if (isUserExists) {
            return res.send({ msg: "user already exists" })
        }
        let hashpassword = await bcrypt.hash(password, 10)
        req.body.password = hashpassword
        let user=await User.create(req.body)

        try {
            let  token = await jwt.sign(
                {
                    email: user.email,
                    id: user.email,
                    username: user.username
                },
                process.env.jwt_secret
            )
            res.send({ msg: "user created", user: user, token })
        } catch (error) {
            res.send({ msg: "error creating user", error: error.message })
        }
    } catch (error) {
        res.send({ msg: "error creating user", error: error })
    }
}

exports.getallusers = async (req, res) => {
    try {
        let users = await User.find();
        res.send({ msg: "users list", users: users });
    } catch (error) {
        res.status(404).send({ msg: "failed to get users", error: error });
    }
}