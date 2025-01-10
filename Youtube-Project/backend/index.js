const express=require("express")
const dotenv= require("dotenv")
dotenv.config()
const cors=require("cors")
const dbconnect = require("./config/db")
const app=express()

app.use(cors())

app.use("/",(req,res)=>{
    res.send("welcome")
})

const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log("server started");
    dbconnect()
})
