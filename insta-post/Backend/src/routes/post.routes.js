const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })
const identifyUser = require("../middlewares/auth.middleware")


postRouter.post('/', upload.single("image"), identifyUser, postController.createPostController)

postRouter.get('/', postController.getPostController)

/**
 * Method : GET
 * /api/posts/details/:postid
 *  - return  an detail about specific post with the id. also check whether the post belong to the user that the request come from
 */

postRouter.get('/details/:postId', identifyUser, postController.getPostDetailsCOntroller)

/**
 * @routes Post /api/posts/like/:postid
 * @description like s post with the id provied in the request params.
 */

postRouter.post('/like/:postId', identifyUser, postController.likePostController)

/**
 * @routes Post /api/posts/unlike/:postid
 * @description unlike s post with the id provied in the request params.
 */
postRouter.post('/unlike/:postId', identifyUser, postController.unlikePostController)

/**
 * @routes Post /api/posts/feed
 * @description get all the post created in the db
 * @access Private
 */

postRouter.get('/feed', identifyUser, postController.getFeedController)


module.exports = postRouter