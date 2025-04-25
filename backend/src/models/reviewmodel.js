import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
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
        type:number,
        required:true,
        maxLength:5
    }
})

export const Review = mongoose.model("Review", reviewSchema)