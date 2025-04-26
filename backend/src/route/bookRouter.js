import express from "express"
import { addfeaturedBooks, getBook, getBookDeatails } from "../controller/bookController.js"
import { createReview } from "../controller/reviewController.js"
import { auth } from "../middleware/authMiddleware.js"

const bookRouter = express.Router()
bookRouter.get('/featuredBooks', addfeaturedBooks)
bookRouter.get('/getBook', getBook)
bookRouter.get('/getBookDetails', getBookDeatails)
bookRouter.post('/addReview',auth,createReview)


export {bookRouter}