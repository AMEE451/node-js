const Router=require("express")
const signupUser = require("../controller/user.controller")

const userRouter=Router

userRouter.post("/create",signupUser)

module.exports=userRouter