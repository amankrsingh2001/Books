import "./dotenv.js"
import mongoose from "mongoose";
import { Book } from "./models/bookmodel.js";
import {bookReview, mockBookData} from "./constants/seedData.js"
import { Review } from "./models/reviewmodel.js";



 const connectDb = async()=>{

    try {
        const connectdb = await mongoose.connect(`${process.env.MONGODB_URL}${process.env.DB_NAME}`)
        console.log("DB connected for Seeding")
        } catch (error) {
            console.log(error)
            process.exit(1)

    }
    
 }

 connectDb().then(()=>{
    const seedDB = async()=>{

      //   await Book.deleteMany()
        await Review.deleteMany()
      //   await Book.insertMany(mockBookData)
        await Review.insertMany(bookReview)
        console.log(mockBookData.length + "books inserted");
        mongoose.connection.close()
    }
    seedDB()
 }).catch((error)=>{
    console.log(error, "Seeding error")
    mongoose.connection.close()
 })