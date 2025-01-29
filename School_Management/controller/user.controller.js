const User = require("../model/user.model")

const createStudent=async(req,res)=>{
    let user=await User.create(req.body)
    res.send(user)
}

const createTeacher=async(req,res)=>{
    let user=await User.create(req.body)
    res.send(user)
}

const createAdmin=async(req,res)=>{
    let user=await User.create(req.body)
    res.send(user)
}

const getAll=async(req,res)=>{
    let users=await User.find()
    res.send(users)
}

module.exports={createAdmin,createStudent,createTeacher,getAll}