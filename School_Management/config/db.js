
const mongoose=require("mongoose")
require("dotenv").config()

const dbconnection=async()=>{
    await mongoose.connect(process.env.URL)   
    console.log("connected");
    
}

module.exports=dbconnection
