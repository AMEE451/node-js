const { Router } = require("express")
const { getuser, postuser, login } = require("../controller/user.controller")
const userRouter = Router()

userRouter.get("/", getuser)
userRouter.post("/", postuser)
userRouter.post("/login", login)

module.exports = userRouter