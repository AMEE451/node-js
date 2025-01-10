const Router=require("express")
const { createuser, loginuser, getuser, signupPage, loginPage } = require("../controller/user.controller")

const userRouter=Router()

userRouter.get("/signup",signupPage)
userRouter.get("/login",loginPage)
userRouter.post("/signup",createuser)
userRouter.post("/login",loginuser)
userRouter.get("/user",getuser)

module.exports=userRouter
