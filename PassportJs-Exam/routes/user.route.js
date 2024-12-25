const Router=require("express")
const signup = require("../controller/user.controller")
const passport=require("passport")

const userRouter=Router()

userRouter.post("/signup",signup)
userRouter.post("/login",passport.authenticate("local"),(req,res)=>{
    res.send("logged in")
})

module.exports=userRouter