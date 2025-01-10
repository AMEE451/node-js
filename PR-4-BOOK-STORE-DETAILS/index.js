const express=require('express');
const dbconnect = require('./config/db');
const bookRouter = require('./routes/book.route');
const isvalid = require('./midlleware/isvalid');

const app=express();
require("dotenv").config();
app.use(express.json());

app.use("/us",isvalid,bookRouter)

// app.get("/",(req,res)=>{
//     res.send("welcome to the book store")
// })

const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`Server started ${PORT}`);
    dbconnect()
});