const Router=require("express")
const usercontroller=require("../controller/user.controller")
const userRouter=Router()

userRouter.post("/",usercontroller.createUser)
userRouter.get("/user-list",usercontroller.getallusers)

module.exports=userRouter