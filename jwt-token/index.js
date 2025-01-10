const express=require("express")
const dbconnect = require("./config/db")
const userRouter = require("./routes/user.route")

const app=express()
app.use(express.json())
app.use("/user",userRouter)

app.get("/",(req,res)=>{
    res.send("welcome to express")
})

const PORT=process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log("server started");
    dbconnect()    
})