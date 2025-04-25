import "./dotenv.js"
import mongoose from "mongoose";
import { Book } from "./models/bookmodel.js";
import { books } from "./ constants/seedData.js";


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
        await Book.deleteMany()
        await Book.insertMany(books)
        console.log(books.length + "inserted");
        mongoose.connection.close()
    }

    seedDB()
 }).catch((error)=>{
    console.log(error, "Seeding error")
    mongoose.connection.close()
 })