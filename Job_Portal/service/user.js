// const { compare } = require("bcrypt")
const userRepository = require("../repository/user")
const { hashPassword, generateToken,compare} = require("../utils/helper")

const createUser = async (data) => {
    let user = await userRepository.getUserByEmail(data.email)
    if (user) {
        throw new Error("user already exists")
    }
    let hash = await hashPassword(data.password)
    data.password = hash
    
    user = await userRepository.register(data)

    let token = await generateToken({
        name: user.name,
        email: user.email,
        id: user.id,
        role: user.role
    })
    return token
}

const login=async(data)=>{
    let user=await userRepository.getUserByEmail(data.email)
    if(!user){
       throw new Error("user does not exists")
    }
    let isMatch=await compare(user.password,data.password)
    console.log(user.password);
    console.log(data.password);
    
    if(!isMatch){
        throw new Error("incorrect password")
    }
    let token = await generateToken({
        name: user.name,
        email: user.email,
        id: user.id,
        role: user.role
    })
    return token
}

const getAllUsers=async()=>{
    let users=await userRepository.getUsers()
    return users
}

const getUserById=async(id)=>{
    let user=await userRepository.getUserById(id)
    if(!user){
        throw new Error("invalid id")
    }
    return user
}

const findUserByQuery=async(query)=>{
    let user=await userRepository.getUserByQuery(query)
    return user
}

const updateUser=async(id,data)=>{
    let user=await userRepository.getUserById(id)
    if(!user){
        throw new Error("invalid id")
    }
    user=await userRepository.updateUser(id,data)
    return user
}

const deleteUser=async(id)=>{
    let user = await userRepository.getUserById(id);
    if (!user) {
      throw new Error("invalid id");
    }
    user = await userRepository.deleteUser(id);
    return user;
}

module.exports={createUser,login,getAllUsers,getUserById,findUserByQuery,updateUser,deleteUser}