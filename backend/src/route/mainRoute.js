import express, {Router} from "express"
import { userRouter } from "./userRoute.js";
import { bookRouter } from "./bookRouter.js";



const mainRouter = express.Router();

mainRouter.use('/user', userRouter)
mainRouter.use('/books', bookRouter)


export {mainRouter}

