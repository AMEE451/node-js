const Router=require("express")
const { createAdmin, createTeacher, createStudent, getAll } = require("../controller/user.controller")

const userRouter=Router()

userRouter.post("/admin",createAdmin)
userRouter.post("/teacher",createTeacher)
userRouter.post("/student",createStudent)
userRouter.get("/",getAll)

module.exports=userRouter