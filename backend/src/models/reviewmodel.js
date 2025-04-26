import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    review:{
        type:String,
        required:true,
    },
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Book"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    rating:{
        type:Number,
        required:true,
        maxLength:5
    }
})

export const Review = mongoose.model("Review", reviewSchema)