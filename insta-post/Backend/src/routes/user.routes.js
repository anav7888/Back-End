const express = require("express")
const userController = require("../controllers/user.conroller")
const identifyUser = require("../middlewares/auth.middleware")

const userRouter = express.Router()


/**\
 * @routes Post /api/users/follow/:username
 * @description follow a user
 * @access Private
 */
userRouter.post("/follow/:username", identifyUser ,userController.followUserController )



/**
 * @routes Post /api/users/unfollow/:username
 * @description Unfollow a user
 * @access Private
 */
userRouter.post('/unfollow/:username',identifyUser,userController.unfollowUserController)



module.exports = userRouter