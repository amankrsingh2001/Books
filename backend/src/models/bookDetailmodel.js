import mongoose, { Schema } from "mongoose";

const bookDetails = new Schema({
    publisher:{
        type:string
    },
    published:{
        type:Date
    },
    pages:{
        type:Number
    },
    language:{
        type:String,
        enum:["English", "Hindi"]
    }
})