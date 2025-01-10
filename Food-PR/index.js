const express=require("express")
const dbconnect = require("./config/db")
const userRouter = require("./routes/user.route")
const path=require("path")
const isLogin = require("./middleware/islogin")
const cookieParser = require("cookie-parser")
const app=express()

app.set('view engine', 'ejs');
app.set('Views',path.join(__dirname,'views'));

app.get("/",(req,res)=>{
    res.render("index")
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }));   
app.use(cookieParser())

app.use("/",userRouter)

const PORT=process.env.PORT || 8090
app.listen(PORT,(req,res)=>{
    console.log("server started")
    dbconnect()
})