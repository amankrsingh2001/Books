import { Book } from "../models/bookmodel.js";

export const addfeaturedBooks = async(req, res)=>{
    try { 
        const featuredBooks = await Book.find().sort({createdAt:-1}).limit(6)
        return res.status(200).json({
          message:"Fetched Data successfully",
          books:featuredBooks
        })
    } catch (error) {
      return res.status(500).json({
        success:false,
        message:error.message
      })
    }
}

export const getBook = async(req, res)=>{
  try {
    const { page = 1, limit = 10 } = req.query;  
    console.log(page, limit)
              const books = await Book.find()
                .skip((page - 1) * limit)
                .limit(Number(limit))
                .exec();
              const total = await Book.countDocuments();
              const  totalPages = Math.ceil(total / limit)
             return res.status(200).json({
                totalItems: total,
                totalPages: totalPages,
                currentPage: Number(page),
                books,
              });
            
    } catch (error) {
            return res.status(500).json({
                success:false,
                message:"Failed to get book"
            })
    }
}