const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//Register
router.post("/register",async(req,res)=>{
    try{
        // generate the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);
        
        //create new user
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword
        });

        //save user and give response
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        console.log(err);
    }
});

//'get' is used to tell what to do on submitting
//LOGIN
router.post("/login",async(req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email});
        // const users = await User.find({email:req.body.email});
        // console.log(users);
        !user && res.status(404).json("user not found");
        const validPassword = await bcrypt.compare(req.body.password,user.password)
        !validPassword && res.status(400).json("Wrong password");
        res.status(200).json(user)
    }catch(err){
        console.log(err);
    }
})


module.exports = router;



// router.get("/register",async(req,res)=>{
//     const user = await new User({
//         username:"john",
//         email:"john@gmail.com",
//         password:"123456"
//     })
//     await user.save();
//     res.send("ok");
// });