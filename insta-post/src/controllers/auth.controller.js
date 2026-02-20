const userModel = require("../models/user.model")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")

async function registerController(req, res){

    const { username, email, password, bio, profileImg } = req.body

    // const isUserExistByEmail = await userModel.findOne({email})
    // if(isUserExistByEmail){
    //     return res.status(409).json({
    //         message: "User already exists with this email"
    //     })
    // }

    // const isUserExistByUsername = await userModel.findOne({username})
    // if(isUserExistByUsername){
    //     return res.status(409).json({
    //         message:"User already exists with this username"
    //     })
    // }
    const isUserAleardyExists = await userModel.findOne({
        $or: [
            { email }, { username }
        ]
    })
    if (isUserAleardyExists) {
        return res.status(409).json({
            message: "User alreasy exists" + (isUserAleardyExists.email == email ? "Email already exists" : "username already exists")
        })
    }

    const hash = crypto.createHash("sha256").update(password).digest("hex")
    const user = await userModel.create({
        username,
        email,
        bio,
        profileImg,
        password: hash,
    })

    const token = jwt.sign({
        id: user._id
    },
        process.env.JWT_SECRET,
        { expiresIn: "1d" })

    res.cookie("token", token)

    res.status(201).json({
        message: "User register successfully",
        user: {
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImg: user.profileImg
        }
    })

}

async function loginController(req, res){
    const { username, email, password } = req.body
    const user = await userModel.findOne({
        $or: [
            {
                username: username
            },
            {
                email: email
            }
        ]
    })

    if (!user) {
        return res.status(404).json({
            message: "user not found"
        })
    }

    const hash = crypto.createHash("sha256").update(password).digest("hex")
    const isPasswordValid = hash == user.password
    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Password invalid"
        })
    }

    const token = jwt.sign({
        id: user._id
    },
        process.env.JWT_SECRET,
        { expiresIn: "1d" })

    res.cookie("token", token)

    res.status(200).json({
        message: "User logged in successfully",
        user: {
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImg: user.ProfileImg
        }
    })

}

module.exports = {
    registerController,
    loginController
}