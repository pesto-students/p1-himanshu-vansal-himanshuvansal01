import mongoose from "mongoose";
const {Schema} =  mongoose;

const AssetsSchema = new mongoose.Schema({
    type: {
        type:String,
        required:false
    },
    equity: {
        type:Number,
        require:false,
    },
    year: {
        type:Number,
        required: false,
    },
    quantity: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    invoice: {
        type: String
    },
},
{timestamps:true})

export default mongoose.model("Assets", AssetsSchema);