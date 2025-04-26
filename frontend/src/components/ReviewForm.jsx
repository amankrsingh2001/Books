
import { useState } from "react"
import { Star } from 'lucide-react'
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { setReview } from "../redux/slices/bookDetailsSlice"

export function ReviewForm({ bookId, bookTitle, setAddReview, review }) {
  const token = useSelector((state)=>state.user)
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  


  
  const handleSubmit = async(e) => {
    e.preventDefault()
    setIsSubmitting(true)
    const reviewDetails = {
        title:title,
        review:content,
        bookId:bookId,
        rating:rating
    }
try {
  const addReview = await axios.post(`${process.env.VITE_BASE_URL}/books/addReview`, reviewDetails, {
    headers:{
      Authorization:`Bearer ${token.token}`
    }
  })
  setIsSubmitting(false)
  setIsSuccess(true)
  const newReview = [...review, addReview.data.review]
  dispatch(setReview(newReview))
  setTimeout(() => {
    
    setIsSuccess(false)
    setAddReview(false)

  }, 2000);
  
} catch (error) {
    console.log(error)
    setIsSubmitting(false)
}
    
  }

  return (
    <div className="rounded-lg border border-gray-200  bg-white ">
      <div className="p-6">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="rounded-full bg-green-100 p-3 ">
              <svg
                className="h-6 w-6 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium">Thank you for your review!</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Your review for "{bookTitle}" has been submitted successfully.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="rating" className="block text-sm font-medium  ">
                Your Rating
              </label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1"
                  >
                    <Star
                      className={`h-6 w-6 ${
                        star <= (hoverRating || rating) 
                          ? "fill-amber-500 text-amber-500" 
                          : "text-gray-300 dark:text-gray-600"
                      }`}
                    />
                    <span className="sr-only">{star} stars</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 ">
                Review Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Summarize your thoughts"
                required
                className="w-full rounded-md border border-gray-300  bg-white  px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 "
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 ">
                Your Review
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What did you like or dislike about this book?"
                rows={5}
                required
                className="w-full rounded-md border border-gray-300  bg-white  px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 "
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || rating === 0}
              className="w-full rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
            >
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}