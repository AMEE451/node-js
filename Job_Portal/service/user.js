const userRepository = require("../repository/user")

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

module.exports=createUser