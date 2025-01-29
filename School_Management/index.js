const express=require("express")
const dbconnection = require("./config/db")
const userRouter=require("./routes/user.route")
const app=express()

app.use(express.json())

const PORT=process.env.PORT

app.use("/api/v1/user",userRouter)

app.listen(PORT,(req,res)=>{
    console.log("server started");
    dbconnection()
})