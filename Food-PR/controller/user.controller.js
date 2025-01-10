const User = require("../models/user.schema")

const signupPage=(req,res)=>{
    res.render("signup");
};

const loginPage=(req,res)=>{
    res.render("login");
};


const getuser=async(req,res)=>{
    let user=await User.find()
    res.send(user)
}

const createuser = async (req, res) => {
    try {
        let { email } = req.body
        let isexist = await User.findOne({ email: email });
        if (isexist) {
            return res.status(400).json({ message: "Email already exists" });
        } else {
            let user = await User.create(req.body);
            res.cookie("username",createuser.name)
            res.cookie("user_id",createuser.id)
            res.cookie("role",createuser.role)
            return res.status(201).json(user);
        }

    } catch (error) {
        res.status(500).json({ error: error })
    }
}

const loginuser = async (req, res) => {
    try { 
        
        let { email, password } = req.body
        let isExist = await User.findOne({ email: email})

        if (!isExist) {
            return res.status(400).json({ message: "Email does not exist" });
        }
        if (isExist.password != password) {
            return res.status(400).json({ message: "Incorrect password" });
        }
         
        console.log(isExist.name);  

        res.cookie("username",isExist.name)
        res.cookie("user_id",isExist.id)
        res.cookie("role",isExist.role)
        return res.status(200).json({ message: "Logged in" });

    } catch (error) {
        res.status(500).json({ error: error });
    }
}

module.exports={createuser,loginuser,getuser,signupPage,loginPage}