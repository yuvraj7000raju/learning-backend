import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try{
        const connectioInstance =mongoose.connect(`mongodb+srv://yuvraj7000raju:999yuvraj7000@cluster0.lcguh3z.mongodb.net/${DB_NAME}`)
    }
    catch(error){
console.log("mongodb connection error",error);
process.exit(1)
    }
}

export default connectDB ;