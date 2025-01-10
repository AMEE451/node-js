const User = require("../model/user.schema")

const createUser = async (req, res) => {
  try {
    let user = await User.create(req.body)
    return res.status(201).json(user)
  }
  catch (error) {
    return res.status(500).json({ error: error })
  }
}

const getUser = async (req, res) => {
  try {
    let users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

const deleteUser = async (req, res) => {
  // console.log(req.params.id);
  
  try {
    let { userId } = req.params;
    let user = await User.findByIdAndDelete(userId);
    console.log(user);
    
    if(!user){
    return res.status(404).json({message:"User not found"});
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const login = async (req, res) => {
  try {
    let { username, password } = req.body
    let isExists = await User.findOne({ username: username })
    if (!isExists) {
      return res.status(404).json({message:"user not found"})
    }
    if (isExists.password != password) {
      return res.status(401).json({ error: "incorrect password" })
    }
    else {
      return res.status(200).json({ message: "logged in" })
    }
  } catch (error) {
    return res.status(500).json({ error: error })
  }
  // res.cookie("username",isExists.username)
  // res.cookie("userId",isExists.id)
  // return res.json({message:"logged in"})
}

// const getLoginPage=(req,res)=>{
//   res.render("login")
// }

// const getsignupPage=(req,res)=>{
//   res.render("signup")
// }

module.exports = { createUser, getUser, deleteUser, login }
