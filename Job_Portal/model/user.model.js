const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    number: Number,
    email: String,
    password: String,
    profile_picture: String,
    role: { type: String, enum: ["Admin", "HR", "Candidate"], default: "Candidate" },
    isActive:{type:Boolean,default:true},
    isVerified:{type:Boolean,default:false},
},
{
    timestamps:true
}
)

const User=mongoose.model("User",userSchema)
module.exports=User
