const Router=require("express")
const { getUser, login, createUser, deleteUser } = require("../controller/user.controller")

const userRouter=Router()

userRouter.get("/",getUser)
userRouter.post("/login",login)
userRouter.post("/signup",createUser)
userRouter.delete("/delete/:id",deleteUser)

module.exports=userRouter
