const User = require("../model/user.model");
const sendingMail = require("../service/mailService");
const bcrypt=require("bcrypt")

const LoginPage = (req, res) => {
  res.render("login");
};
const SignupPage = (req, res) => {
  res.render("signup");
};
const createUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      let isExists = await User.findOne({ email: email });
      if (isExists) {
        return res.send("users already Exists");
      } else {
        let hash = await bcrypt.hash(password, 10);
        req.body.password = hash;
        let user = await User.create(req.body);
        return res.status(201).json(user);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

const sendMail=async(req,res)=>{
    const {to,subject,content}=req.body
    await sendingMail(to,subject,content)
    res.send('mail to:'+to)
}

const login = async (req, res) => {
    const { email, password } = req.body;
    let isExists = await User.findOne({ email: email });
    if (!isExists) {
      return res.send("user not found");
    }
  
    const isMatched = await bcrypt.compare(password, isExists.password);
  
    if (!isMatched) {
      return res.send("invalid password");
    }
    res.cookie("username", isExists.username);
    res.cookie("userId", isExists.id);
    return res.send("logged in");
  };

  
                                         

module.exports={createUser,sendMail,login,LoginPage,SignupPage}