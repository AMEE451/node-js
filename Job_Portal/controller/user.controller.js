// const {createUser,login} = require("../service/user");
// const { deleteUser } = require("../repository/user")
const userService=require("../service/user")
// console.log(createUser);

const signupUser = async (req, res) => {
    try {
        let user = await userService.createUser(req.body)
        return res.send({ token: user })
    } catch (error) {
        return res.status(404).send({ message: error.message })
    }
}

const loginUser = async (req, res) => {
    try {
        let token = await userService.login(req.body)
        return res.send({ token: token })
    } catch (error) {
        return res.status(404).send({ message: error.message })
    }
}

const getallUsers=async(req,res)=>{
    try {
        let users=await userService.getAllUsers()
        return res.send(users)
    } catch (error) {
        res.status(404).send({message:error.message})
    }
}

const getUserById=async(req,res)=>{
    const{userId}=req.params
   try {
     let user=await userService.getUserById(userId)
     return res.send(user)
   } catch (error) {
     res.status.send({message:error.message})
   }
}

const usersByQuery=async(req,res)=>{
    try {
        let users=await userService.findUserByQuery(req.query)
        return res.status(200).send({msg:"fetched successfully",users})
        
    } catch (error) {
        return res.status(404).send({message:error.message})
    }
}

const UpdateUser=async(req,res)=>{
    let {userId}=req.params
    console.log(userId);
    
   try {
     let user=await userService.updateUser(userId,req.body)
     return res.send(user)
   } catch (error) {
     res.status(404).send({message:error.message})
   }
}

const DeleteUser=async(req,res)=>{
    let {userId}=req.params 
    console.log(userId);
    
    try {
        let user=await userService.deleteUser(userId)
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        return res.status(200).send({message:"user deleted",user})
      } catch (error) {
        res.status(500).send({message:error.message})
      }
}
module.exports = {signupUser,loginUser,getallUsers,getUserById,usersByQuery,UpdateUser,DeleteUser}