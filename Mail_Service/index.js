const express=require('express');
const dbconnect = require('./config/db');
const userRouter = require('./routes/user.route');
const path=require("path")

const app=express();
require("dotenv").config();
app.use(express.json());

app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/",userRouter)

const PORT=process.env.PORT || 3333;
app.listen(PORT,()=>{
    console.log(`Server started ${PORT}`);
    dbconnect()
});