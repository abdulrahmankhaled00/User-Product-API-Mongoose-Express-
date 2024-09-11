import mongoose from "mongoose";


const schema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    age: {
        type: Number,
        min: 10,
        max: 100
    },
    gander: {
        type: String,
        enum: ['male', 'female']
    },
    phone: {
        type: Number,

    },
    isVrify: {
        type: Boolean,
        default: false
    }
},{timestamps:true})

export const userModel = mongoose.model('user', schema)