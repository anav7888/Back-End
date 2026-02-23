const followModel = require("../models/follow.model")


async function followUserController(req,res){

    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    if(followerUsername == followeeUsername){
        return res.status(400).json({
            message: "You can't follow yourself"
        })
    }

    const isFolloweeExists = await followModel.findOne({
        username : followeeUsername
    })
    if(!isFolloweeExists){
        return res.status(404).json({
            message:"user you are trying to follow does not exists"
        })
    }

    const isAlreadyFollowing = await followModel.findOne({
        follower : followerUsername,
        followee : followeeUsername
    })

    if(isAlreadyFollowing){
        res.status(409).json({
            message:`You are already following ${followeeUsername}`,
            follow: isAlreadyFollowing
        })
    }

    const followRecord = await followModel.create({
        follower : followerUsername,
        followee : followeeUsername
    })

    res.status(200).json({
        message : `You are now following ${followeeUsername}`,
        follow: followRecord
    })
}

module.exports = {
    followUserController
}