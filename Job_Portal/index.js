const express=require("express")
const dbconnection = require("./config/db")
const cors=require("cors")
const appRoutes=require("./routes/index")
const decodeToken = require("./middleware/Decode")
require("dotenv").config()
const app=express()

app.use(express.json())
app.use(cors())

const PORT=process.env.PORT

app.use("/api/v1",decodeToken,appRoutes)

app.listen(PORT,()=>{
    console.log("server started");
    dbconnection()
})
