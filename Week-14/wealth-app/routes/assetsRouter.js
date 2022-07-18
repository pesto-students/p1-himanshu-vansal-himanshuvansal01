import express from "express";
import Assets from "../model/Assets.js";
import multer from "multer";
import path from "path";
const assetsRouter = express.Router();

assetsRouter.get("/all", async(req, res) => {

    try{
        const assets = await Assets.find({year:{$lt: 2022} })
        if(assets === null){
            res.send("No assets found!")
        }
        return res.json(assets);
    }catch(err){
        throw err;
    }
})

assetsRouter.post("/save" ,async(req, res) => {

    console.log("Enter");
    const assets = new Assets(req.body)
    
    try{
        await assets.save();
        return res.status(200).json(assets);
    }catch(err){
        throw err;
    }
})

assetsRouter.put("/update:id", async(req, res) => {
    
    try{
        const updateAssets = await Assets.findByIdAndUpdate(
            req.params.id,
            {$set: req.body}, 
            {new: true}
        );
        if(updateAssets == null){
            res.send("No assets found By this id!")
        }
        return res.status(200).json(updateAssets);
    }catch(err){
        throw err;
    }
})

assetsRouter.get("/get/:id", async(req, res) => {
    
    try{
        const getAssetsById = await Assets.findById(
            req.params.id
        );
        if(getAssetsById == null){
            res.send("No assets found By this id!")
        }
        return res.status(200).json(getAssetsById);
    }catch(err){
        throw err;
    }
})

assetsRouter.delete("/delete/:id", async(req, res) => {
    
    try{
        const deleteAssetsById = await Assets.findByIdAndDelete(
            req.params.id
        );
        if(deleteAssetsById == null){
            res.send("No assets found By this id!")
        }
        return res.status(200).send("This Asset has been deleted!")
    }catch(err){
        throw err;
    }
})

assetsRouter.post("/upload/:id",async(req, res) => {
    let getAssetsById = await Assets.findByIdAndUpdate(
        req.params.id,
        {$set: req.body}, 
        {new: true}
    );
    if(getAssetsById == null){
        res.send("No assets found By this id!")
    }
    upload(req,res,async (err) => {
            if(err) {
                res.send(err)
            }
            else {
                getAssetsById.set({invoice: req.file.path})
                await getAssetsById.save();
                return res.status(200).send("File has been uploaded!");
            }
        })
    })

const storage = multer.diskStorage({
    destination: function(req, file,cb){
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb){
        let ext = path.extname(file.originalname);
        cb(null, Date.now() + ext)
    }
})

var upload = multer({
    storage: storage,
    fileFilter: function(req,file,callback){
        if(
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg" ||
            file.mimetype == "application/pdf"
            ){
                callback(null,true);

            }else{
                console.log('only jpg,pdf and png allowed!');
                callback(null, false)
            }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
}).single("invoice");






export default assetsRouter;