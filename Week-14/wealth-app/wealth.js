import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRouter.js";
import assetsRouter from "./routes/assetsRouter.js";
import { verifyToken } from "./utility/verifyToken.js";
import bodyParser from "body-parser";

const app = express();
dotenv.config();
app.use(cookieParser())

const connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("conneted to mongoDB");
    }catch(error){
        throw error;
    }
}

mongoose.connection.on("connected",() => {
    console.log("database is connected");
})
mongoose.connection.off("disconnected",() => {
    console.log("database is disconnected");
})
//middlewares
app.use(express.json());
app.use("/api/auth",userRouter)
app.use("/api/assets",verifyToken,assetsRouter)


app.listen('8000', function(){
    connect();
    console.log("Hello from the server");
})