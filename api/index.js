const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")

dotenv.config();

// mongoose.connect('mongodb://localhost:27017/social',{useNewUrlParser:true});
mongoose.connect(process.env.MONGO_URL);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);

// app.get("/",(req,res)=>{
//     res.send("Welcome to homepage")
// });

// app.get("/users",(req,res)=>{
//     res.send("Welcome to userspage")
// });

app.listen(7000,()=>console.log("App is running at server 7000"));
