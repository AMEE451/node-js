const express=require('express');
const dbconnect = require('./config/db');
const userRouter = require('./routes/user.route');
const path=require("path")

const app=express();
require("dotenv").config();
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.static(path.join(__dirname, "public")));


app.use("/",userRouter)

const PORT=process.env.PORT || 3555;
app.listen(PORT,()=>{
    console.log(`Server started ${PORT}`);
    dbconnect()
});