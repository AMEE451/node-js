const User = require("../model/user.model")

const register = async (data) => {
    let user = await User.create(data)
    return user
}

const getUsers = async () => {
    let users = await User.find();
    return users;
}

const getUserByEmail = async (email) => {
    let user = await User.findOne({ email: email });
    return user;
}

const getUserById = async (id) => {
    let user = await User.findById(id);
    return user;
}

const updateUser = async (id,userdata) => {
    let user = await User.findByIdAndUpdate(id, userdata, { new: true });
    return user;
}

const deleteUser = async (id) => {
    let user = await User.findByIdAndUpdate(id,{isActive:false},{new:true});
    return user;
}

const getUserByQuery = async (query) => {
    let user = await User.find(query);
    return user;
}

module.exports={register,getUsers,getUserByEmail,getUserById,getUserByQuery,updateUser,deleteUser}