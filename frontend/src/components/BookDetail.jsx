import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { FaBackward } from "react-icons/fa";
import { Badge, BookOpen, Heart, Share, Star } from "lucide-react";
import { setBooksDetailsById } from "../redux/thunks/api";
import { ReviewForm } from "./ReviewForm";

export default function BookDeatil() {
  const { details, review } = useSelector((state) => state.bookDetail);
  const [addReview, setAddReview] = useState(false)
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(setBooksDetailsById(params.id, navigate));
  }, [params.id]);

  if (Object.keys(details).length == 0) {
    return <div>....Load ho rha hai bhia </div>;
  }

  return (
    <div className="w-screen py-20">
      <div className=" flex flex-col ">
        <div
          onClick={() => navigate("/browse")}
          className="cursor-pointer w-[90%] mt-5 mx-auto flex items-center gap-2 text-[#71717A] "
        >
          <FaBackward className="text-sm" />
          <p className="text-sm">Back to Books</p>
        </div>

        <div className="flex justify-between  mt-8 w-[80%] mx-auto  ">
          <div className="w-[18%]  flex flex-col gap-4">
            <div className="  rounded-lg drop-shadow-2xl ">
              <img
                src={details.image || "/placeholder.svg"}
                alt={`${details.name} cover`}
                className="object-contain w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                className="cursor-pointer bg-black inline-flex items-center justify-center rounded-md border border-gray-300  text-white px-4 py-2 text-sm font-medium   shadow-sm
                   hover:bg-black/80  focus:outline-none  focus:ring-offset-2 transition-colors"
              >
                <BookOpen className="mr-2 h-4 inline-flex " />
                Read Now
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  className="cursor-pointer inline-flex items-center justify-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium   shadow-sm
                   hover:bg-gray-100 dark:hover:bg-gray-100 text-black focus:outline-none  focus:ring-offset-2 transition-colors"
                >
                  <Heart className="mr-2 h-4 inline-flex " />
                  Save
                </button>
                <button
                  type="button"
                  className="cursor-pointer inline-flex items-center justify-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium   shadow-sm
                   hover:bg-gray-100 dark:hover:bg-gray-100 text-black focus:outline-none   focus:ring-offset-2 transition-colors"
                >
                  <Share className="mr-2 h-4 inline-flex " />
                  Share
                </button>
              </div>
            </div>

            <div>Book Details</div>
          </div>

          <div className="w-[72%] flex flex-col gap-8">
            <div className="">
              <h1 className="text-3xl font-serif font-bold">{details.name}</h1>
              <p className="text-md text-muted-foreground mt-2">
                by {details.author}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
              {details.tag.map((tag) => (
                <p className="text-sm capitalize font-serif bg-[#9b9b9f] px-2 py-1 rounded-2xl text-white">
                  {tag}
                </p>
              ))}
            </div>
            </div>

           
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-semibold ">Description</h2>
              <div className="whitespace-pre-line text-muted-foreground">
                {details.description}
              </div>
            </div>

            <div className="flex ">
                <div className="mx-auto bg-white border border-gray-200 w-[50%] py-2">
                  <p className="text-center">Reviews</p>
                </div>
                <div onClick={()=>setAddReview(true)} className="mx-auto border border-gray-200 w-[50%] py-2">
                <p className="text-center">Write a Review</p>
                </div>
            </div>

            {
              !addReview ? <div className="flex flex-col gap-4">
              {
                review.map((rev)=>{
                  return <div key={rev.id} className="rounded-lg border border-gray-200  bg-white  overflow-hidden">
                  <div className="p-4 pb-2 border-b border-gray-100 ">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div className="relative h-8 w-8 overflow-hidden rounded-full">
                          {/* {rev.user.avatar ? (
                            <img 
                              src={rev.userId.avatar || "/placeholder.svg"} 
                              alt={rev.user.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium">
                              {rev.user.initials}
                            </div>
                          )} */}
                        </div>
                        <div>
                          <div className="font-medium">{rev.title}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">by {`${rev.userId.firstName }`}  </div>
                        </div>
                      </div>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < rev.rating ? "fill-amber-500 text-amber-500" : "text-gray-300 dark:text-gray-600"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-4 pb-2">
                    <p className="text-sm">{rev.review}</p>
                  </div>
                  <div className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">{rev.date}</div>
                </div>
                })
              }
           </div>:<div>
            <ReviewForm bookId={params.id} bookTitle={details.name} setAddReview={setAddReview} review={review}/>
           </div>
            }

            
          </div>
        </div>
      </div>
    </div>
  );
}
