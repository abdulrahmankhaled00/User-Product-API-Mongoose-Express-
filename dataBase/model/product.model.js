import mongoose from "mongoose";


const schema=new mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    createdBy:{
        
        type:mongoose.Types.ObjectId,
        ref:'user'
    }
},{timestamps:true})

export const productModel=mongoose.model('product',schema)