const User = require("../model/user.model")

const signup=async(req,res)=>{
    try {
        const {email,password}=req.body
        let isExists=await User.findOne({email:email})
        if(isExists){
            return res.send("User already exists")
        }
        else{
            // let hashedpswd=await bcrypt.hash(password, 10)
            // req.body.password=hashedpswd
            let user=await User.create(req.body)
            return res.status(201).json(user)
        }
    } catch (error) {
        res.status(500).json({error:error})
    }

}

module.exports=signup