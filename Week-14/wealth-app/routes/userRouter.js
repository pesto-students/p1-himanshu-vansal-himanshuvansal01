import express from "express";
import user from "../model/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const userRouter = express.Router();

userRouter.post("/register",async(req,res) =>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new user({
            username: req.body.username,
            password: hash,
            email: req.body.email,
         })
         await newUser.save();
         return res.status(200).send("New user has been created!");
    }catch(err){
    
        throw err;
    }
});

userRouter.post("/login",async(req,res) =>{
    try{
        const loginUser = user.findOne(req.body.username);
        if(!loginUser){
            throw err("Invalid user!")
        }
        const password = bcrypt.compare(req.body.password, loginUser.password);
        if(!password){
            throw err("Invalid password!")
        }
        const token = jwt.sign({username:loginUser.username,password:loginUser.password},process.env.JWT)
        const{email, ...otherRequest} = loginUser;
        return res.cookie("web_access_token", token, {
            httpOnly: true,
        })
        .status(200)
        .json({message: "Logged in successfully 😊 👌"})
    }catch(err){
    
        throw err;
    }
});

export default userRouter;