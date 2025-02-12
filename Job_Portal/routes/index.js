const Router=require("express")
const userRouter = require("./user.routes")
const details=require('./userDetails.routes')
const jobrouter = require("./job.routes")
const index=Router()

index.use("/users",userRouter)
index.use("/user-details", details);
index.use("/jobs",jobrouter)

module.exports=index