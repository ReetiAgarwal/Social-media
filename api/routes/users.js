const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//for get use params(when we want to extract parameter from url) and for post use body


//update user
router.put("/:id",async(req,res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password,salt);         
            }catch(err){
                return res.status(500).json(res);
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id,{$set : req.body});
            res.status(200).json("Data Successfully updated");
        }
        catch(err)
        {
           return res.status(500).json(err); 
        }
    }else{
        return res.status(403).json("Not allowed,You can make changes only on your id");
    }
});


//delete user
router.delete("/:id",async(req,res)=>{
    if(req.body.userId === req.params.id||req.body.isAdmin)
    {
        try{
            const user = await User.findByIdAndDelete(req.params.id);
            return res.status(200).json("Account deleted successfully");
        }
        catch(err){
            return res.status(500).json(err);
        }
    }
    else
        return res.status(403).json("You can delete only your account");
});

//get user
//lh:5000/users?query
router.get("/",async (req,res)=>{
    const userId = req.query.userId;
    const username = req.query.username;
    try{
        const user = userId ? await User.findById(userId) : await User.findOne({username : username});
        const {password,updatedAt,...others} = user._doc
        res.status(200).json(others); //we don't need password and updatedAt data
    }
    catch(err){
        res.status(500).json(err);
    }
});


//follow a user
router.put("/:id/follow",async(req,res)=>{
    if(req.body.userId !== req.params.id)
    {
        try{
            const currentuser = await User.findById(req.body.userId);
            const user = await User.findById(req.params.id);
            if(!user.followers.includes(req.body.userId))
            {
                await user.updateOne({$push:{followers:req.body.userId}});
                await currentuser.updateOne({$push:{followings:req.params.id}});
                res.status(200).json("Followed");
            }
            else
            {
                res.status(403).json("You are already following");
            }
        }
        catch(err)
        {
            res.status(500).json(err);
        }
    }
    else
    {
        res.status(403).json("You can't follow yourself");
    }
});

//unfollow a user
router.put("/:id/unfollow",async(req,res)=>{
    if(req.body.userId !== req.params.id)
    {
        try{
            const currentuser = await User.findById(req.body.userId);
            const user = await User.findById(req.params.id);
            if(user.followers.includes(req.body.userId))
            {
                await user.updateOne({$pull:{followers:req.body.userId}});
                await currentuser.updateOne({$pull:{followings:req.params.id}});
                res.status(200).json("UnFollowed");
            }
            else
            {
                res.status(403).json("You are not following");
            }
        }
        catch(err)
        {
            res.status(500).json(err);
        }
    }
    else
    {
        res.status(403).json("You can't follow yourself");
    }
});

module.exports = router;