const mongoose=require ("mongoose")
require ("dotenv").config()

const dbconnect=async()=>{
    await mongoose.connect(process.env.DB_URL)
    console.log("connected");
    
}
module.exports=dbconnect
