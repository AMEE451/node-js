 const Food = require("../models/food.schema")

const getfood=async(req,res)=>{
   try {
     let food=await Food.find()
     res.status(200).send(food)
   } catch (error) {
     res.status(500).send({error:error})
   }
}

const addfood=async(req,res)=>{
    try {
        let {role}=req.cookies
        if(role!="Admin"){
            return res.status(401).send("Only Admins are allowed")
        }
        else{
            let food=await Food.create(req.body)
            res.status(200).send(food)
        }
    
    } catch (error) {
        res.status(500).send({error:error})
    }
}

const updatefood=async(req,res)=>{
    let {role}=req.cookies
    if(role!="Admin"){
        return res.status(401).send("Only admins can update")
    }
    else{
        let {id}=req.cookies
        let food=await Food.findByIdAndUpdate(id,req.body,{key:true})
        res.status(500).send({error:error})
    }
}


