const Router=require("express")
const {signupUser,loginUser, UpdateUser, DeleteUser, getallUsers, getUserById, usersByQuery} = require("../controller/user.controller")

const userRouter=Router()

userRouter.post("/create",signupUser)
userRouter.post("/login",loginUser)
userRouter.get("/all",getallUsers)
userRouter.patch("/:userId",UpdateUser)
userRouter.patch("/:userId",DeleteUser)
userRouter.get("/info/:userId",getUserById)
userRouter.get("/",usersByQuery)

module.exports=userRouter