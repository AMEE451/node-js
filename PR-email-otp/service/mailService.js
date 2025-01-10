const nodemailer=require("nodemailer")
require("dotenv").config()
const transport=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"desaiamee699@gmail.com",
        pass:"vrrq ltef qksx ctxd",
    },
})

const sendingMail=async(to,subject,content)=>{
    try {
        const mailOptions={
            from:"desaiamee699@gmail.com",
            to:to,
            subject:subject,
            html:content,
        }
        let res=await transport.sendMail(mailOptions)
    } catch (error) {
        console.log(error.message);
        
    }
}
module.exports=sendingMail