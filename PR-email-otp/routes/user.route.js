const Router=require("express")
const {sendMail,createUser, login, LoginPage, SignupPage} = require("../controller/user.controller")
const userRouter=Router()
userRouter.get("/login",LoginPage)
userRouter.get("/signup",SignupPage)
userRouter.post("/mail",sendMail)
userRouter.post("/user",createUser)
userRouter.post("/loginn",login)


module.exports=userRouter