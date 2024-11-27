const express=require("express")
const dbconnect = require("./config/db")
const userRouter = require("./routes/user.routes")
const productRouter = require("./routes/product.route")
const app=express()

app.use(express.json())

app.use("/user",userRouter)
app.use("/product",productRouter)

app.listen(8090,()=>{
    console.log("server started")
    dbconnect()
})
