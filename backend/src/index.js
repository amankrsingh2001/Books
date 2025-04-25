import "./dotenv.js"
import dbConnect from "./db/dbConnection.js";
import express from "express"
import { mainRouter } from "./route/mainRoute.js";
import cors from 'cors'

const app = express();

app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use('/api/v1/', mainRouter)

dbConnect().then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`)
    })
})

