import mongoose, { model, Schema } from "mongoose";


const userSchema = new Schema({
    firstName:{
        type:String,
        requred:true,
        maxLength:30,
    },
    lastName:{
        type:String,
        requred:true,
        maxLength:30,
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

export const User = mongoose.model("User", userSchema)