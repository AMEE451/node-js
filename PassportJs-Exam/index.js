const express=require("express")
const app=express()
const dbconnect = require("./config/db")
const userRouter = require("./routes/user.route");
const initializer = require("./middleware/passport");
const passport = require('passport');
const session = require('express-session');
require("dotenv").config();

app.use(express.json())
app.use(express.urlencoded({ extended:true }));

app.use("/",userRouter)

app.use(session({secret:"secret key"}))
app.use(passport.initialize())
app.use(passport.session())

initializer(passport)

const PORT=process.env.PORT ||8090
app.listen(PORT,()=>{
    console.log("server started"    );
    dbconnect()
})