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


module.exports = userRouter