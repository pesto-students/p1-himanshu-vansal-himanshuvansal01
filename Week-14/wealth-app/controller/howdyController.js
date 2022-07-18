import express from "express";
import mongoose from "mongoose";

const app = express();

app.get("/user", (req, res) => {
    return res.json("Welcome new user");
})