const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
// const { findById } = require("../models/User");

//create a post
router.post("/",async(req,res)=>{
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//update a post
router.put("/:id",async (req,res)=>{
    try
    {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set:req.body})
            res.status(200).json("Updated successfully")
        }
        else
        {
            res.status(403).json("You can update only your post");
        }
    }
    catch(err){
        res.status(500).json(err);
    }
})

//delete a post
router.delete("/:id",async (req,res)=>{
    try
    {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne()
            res.status(200).json("Deleted successfully")
        }
        else
        {
            res.status(403).json("You can update only your post");
        }
    }
    catch(err){
        res.status(500).json(err);
    }
})

//like a post
router.put("/:id/like",async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId))
        {
            await post.updateOne({$push:{likes:req.body.userId}});
            res.status(200).json("Post Liked");
        }else{
            await post.updateOne({$pull:{likes:req.body.userId}});
            res.status(200).json("Post Disliked");
        }
    }
    catch(err){
        res.status(500).json(err);
    }
})

//get a post
router.get("/:id",async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        return res.status(500).json(err);
    }
});

//get timeline posts(all posts of user followings)
router.get("/:id/allposts",async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const userPosts = await Post.find({userId:user._id});
        const friendPosts = await Promise.all(
            user.followings.map((friendId)=>{
            return Post.find({userId : friendId})
        })
        );
        res.status(200).json(userPosts.concat(...friendPosts))
    }catch(err){
        res.status(500).json(err);
    }
});

//get users all posts
router.get("/profile/:username",async (req,res)=>{
    try{
        const user = await User.findOne({username : req.params.username});
        const userPosts = await Post.find({userId:user._id});
        res.status(200).json(userPosts);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;
