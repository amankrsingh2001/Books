import mongoose, { model, Schema } from "mongoose";

const bookSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
        maxLength:30
    },
    image:[{
        type:String,
        required:true,
    }],
    postedAt:{
        type:Date,
        default:Date.now()
    },  
    tag:[{
        type:String
    }]

})

export const Book = mongoose.model("Book", bookSchema)