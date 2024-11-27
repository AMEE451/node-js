
const mongoose=require("mongoose")

const todoSchema=new mongoose.Schema({
    taskname:String,
    description:String,
    status:String
})

let todo=mongoose.model("todo",todoSchema)
module.exports=todo