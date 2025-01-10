const Router=require("express")
const {sendMail,createUser, login, SignupPage, LoginPage, sendotp} = require("../controller/user.controller")
const userRouter=Router()

userRouter.post("/mail",sendMail)
userRouter.post("/user",createUser)
userRouter.post("/login",login)

userRouter.get("/signup",SignupPage)
userRouter.get("/loginpage",LoginPage)
userRouter.post("/sendotp",sendotp)

module.exports=userRouter