const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:Number,
    role:String
})

const User=mongoose.model("USer",userSchema)
module.exports=User