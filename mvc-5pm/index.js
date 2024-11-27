const express=require("express");
const dbconnect = require("./config/db");
const productRouter = require("./routes/product.routes");
const app=express()

app.use(express.json())
app.use("/",productRouter)

const PORT=process.env.PORT || 3060
app.listen(PORT,()=>{
    console.log(`server started ${PORT}`);
    dbconnect()
})

