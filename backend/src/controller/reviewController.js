import { Review } from "../models/reviewmodel.js";

export const createReview = async(req, res)=>{
    try {
        const {rating, bookId, title, review} = req.body;
        const userId = req.id;

        if(!rating || !bookId|| !title || !review) {
            return res.status(404).json({
                success:false,
                messsage:"Invalid data"
            })
        }

        const newReview = await Review.create({
            title:title,
            review:review,
            rating:rating,
            bookId:bookId,
            userId:userId
        })

        return res.status(200).json({
            success:true,
            message:"Review Added successfully",
            review:newReview
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}