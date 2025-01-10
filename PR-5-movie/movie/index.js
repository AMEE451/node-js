const express=require("express");
require("dotenv").config()
const dbconnect = require("./config/db");
const userRouter = require("./routes/user.route");
const movieRouter = require("./routes/movie.route");
const Cookies = require("cookie-parser");
const isLoggedin = require("./middleware/islogin");
const app=express()
app.use(express.json())

app.use(Cookies());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("Welcome to the movie API")
})

app.get("/",isLoggedin,(req,res)=>{
    let {username}=req.cookies
    res.render("index",{username})
})

app.use("/user",userRouter)
app.use("/movie",movieRouter)



const PORT = process.env.PORT || 8090;
app.listen(PORT,()=>{
    console.log("server started");
    dbconnect()
})