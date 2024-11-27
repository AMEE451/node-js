const express=require('express')
const app=express()

app.get("/node",(req,res)=>{
    res.send("welcome to node")
})

app.listen(3050,()=>{
    console.log("listening on http://localhost:3050");
})  

mongodb+srv://AmeeDesai:MongodbStk@cluster0.5nuhi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0