const express=require("express")
const dbconnection = require("./config/db")
const cors=require("cors")
const userRouter=require("./routes/user.routes")
require("dotenv").config()
const app=express()

app.use(express.json())
app.use(cors())

const PORT=process.env.PORT

app.use("/api/v1/user",userRouter)

app.listen(PORT,()=>{
    console.log("server started");
    dbconnection()
})
