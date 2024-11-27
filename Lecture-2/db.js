const mongoose=require("mongoose")
const dbConnect=async()=>{
    await mongoose.connect("mongodb+srv://AmeeDesai:MongodbStk@cluster0.5nuhi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("connected");
}
module.exports=dbConnect


