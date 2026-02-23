const postModel = require("../models/post.model")
const ImageKit = require("@imagekit/nodejs")
const { toFile } = require("@imagekit/nodejs")
const jwt = require("jsonwebtoken")

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function createPostController(req, res) {

    console.log(req.body, req.file)

    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({
            message: "Token not provided, Unauthorized access"
        })
    }

    let decoded = null
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (err) {
        return res.status(401).json({
            message: "user not authorized"
        })
    }

    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), "file"),
        fileName: "test",
        folder: "Cohort-2-instaClone-post"
    })

    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: decoded.id
    })

    res.status(201).json({
        message: "Post created successfully",
        post
    })

}

async function getPostController(req, res) {

    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({
            message: "UnAuthorized access"
        })
    }

    let decoded;

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (err) {
        return res.status(401).json({
            message: "Token invalid"
        })
    }

    const userId = decoded.id

    const posts = await postModel.find({
        user: userId
    })

    res.status(200).json({
        message: "Posr fetched successfully",
        posts
    })


}

async function getPostDetailsCOntroller(req, res) {

    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: "UnAuthorized access"
        })
    }

    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (err) {
        return res.status(401).json({
            message:"Invalid token"
        })
    }

    const userId = decoded.id
    const postId = req.params.postId   
 
    
    const post = await postModel.findById(postId)
    console.log("Post ID:", postId)
    if(!post){
        return res.status(404).json({
            message: "Post not found."
        })
    }
    

    const isUserValid = post.user.toString() === userId
    if(!isUserValid){
        return res.status(403).json({
            message:"Forbidden content."
        })
    }

    return res.status(200).json({
        message:"Post fetched Successfully",
        post
    })

}

module.exports = {
    createPostController,
    getPostController,
    getPostDetailsCOntroller
}