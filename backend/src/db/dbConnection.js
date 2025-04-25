import mongoose from "mongoose"

const dbConnect = async () =>{
    try {
        const connectDb  =  await mongoose.connect(`${process.env.MONGODB_URL}${process.env.DB_NAME}`)
        console.log("DB connected Successfully")
    } catch (error) {
        console.log("Error in DB connection", error)
        process.exit(1);
    }
    
}


export default dbConnect