import express from "express"
import { addfeaturedBooks, getBook } from "../controller/bookController.js"

const bookRouter = express.Router()
bookRouter.get('/featuredBooks', addfeaturedBooks)
bookRouter.get('/getBook', getBook)
bookRouter.get('/getBookDetails', )


export {bookRouter}