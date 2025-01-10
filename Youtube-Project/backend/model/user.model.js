const mongoose=require("mongoose")
const bcrpyt=require("bcrypt")
const jwd=require("jsonwebtoken")

const userSchema=new mongoose.Schema({
    username:{
    type:String,
    required:true,
    minlength:[3,"Must be atleast three charachters long"]},
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        select:true
    },
    socketId:String
})

userSchema.methods.generateAuthToken=()=>{
    const token=JsonWebTokenError.sign({id:this._id},process.env.JWT_SECRET)
    return token
}

userSchema.static.hashpassword=async(password)=>{
    return await bcrpyt.hash(password,10 )
}

const User=mongoose.model("User",userSchema)
module.exports=User