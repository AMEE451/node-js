const User = require("../models/user.model")
const sendingMail = require("../services/mailService")
const bcrypt=require("bcrypt")

const sendMail=async(req,res)=>{
    const {to,subject,content}=req.body
    await sendingMail(to,subject,content)
    res.send('mail to:'+to)
}

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

        return res.send("logged in");
      };
               
      
      let opts=new Map()

      const sendotp= async(req,res)=>{
        const {email}=req.body
          try {
            isExists=await User.findOne({email:email})
            if(!isExists){
              return res.status(400).json({message:"user not found"})
            }
            
            const otp=Math.floor(100000 + Math.random() * 900000);
            opts.set(Number(otp),email)
            console.log(`"otp"${otp}`);
  
            await sendingMail(email,"OTP","Your Otp :"+otp)
            // return res.redirect("/loginpage")
            res.send("otp ")
          } catch (error) {
              res.send(error.message)
          }
          
      }

module.exports={sendMail,createUser,SignupPage,LoginPage,login,sendotp}