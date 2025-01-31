const { default: mongoose } = require("mongoose")
require("dotenv").config()

const dbconnection=async()=>{
    await mongoose.connect(process.env.DB_URL)
    console.log("coonected");
    
}

module.exports=dbconnection