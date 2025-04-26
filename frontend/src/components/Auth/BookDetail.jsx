import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { booksData } from "../../../data/booksData";
import { useSelector } from "react-redux";
import { FaBackward } from "react-icons/fa";
import { Badge, BookOpen, Heart, Share } from "lucide-react";
import axios from "axios";

export default function BookDeatil() {
  const [bookDeatils, setBookDetails] = useState({});
  const { books } = useSelector((state) => state.books);
  const navigate = useNavigate();
  const params = useParams();



  useEffect(() => {
    const getBookDataById = async()=>{
        const data = await axios.get('http://localhost:8000/api/v1/book/getBookDetail') 
    }
  }, [params.id, books]);

  return (
    <div>This is the error </div>
    // <div className="w-screen py-20">
    //   <div className=" flex flex-col ">
    //     <div
    //       onClick={() => navigate("/browse")}
    //       className="cursor-pointer w-[90%] mt-5 mx-auto flex items-center gap-2 text-[#71717A] border-2 border-black"
    //     >
    //       <FaBackward className="text-sm" />
    //       <p className="text-sm">Back to Books</p>
    //     </div>

    //     <div className="flex justify-between items-center  mt-8 w-[80%] mx-auto ">
    //       <div className="w-[18%]  flex flex-col gap-4">
    //         <div className="  rounded-lg drop-shadow-2xl ">
    //           <img
    //             src={bookDeatils.image || "/placeholder.svg"}
    //             alt={`${bookDeatils.name} cover`}
    //             className="object-contain w-full"
    //           />
    //         </div>
    //         <div className="flex flex-col gap-2">
    //         <button
    //               type="button"
    //               className="cursor-pointer bg-black inline-flex items-center justify-center rounded-md border border-gray-300  text-white px-4 py-2 text-sm font-medium   shadow-sm
    //                hover:bg-black/80  focus:outline-none  focus:ring-offset-2 transition-colors"
    //             >
    //             <BookOpen className="mr-2 h-4 inline-flex " />
    //             Read Now
    //           </button>
    //           <div className="grid grid-cols-2 gap-2">
    //             <button
    //               type="button"
    //               className="cursor-pointer inline-flex items-center justify-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium   shadow-sm
    //                hover:bg-gray-100 dark:hover:bg-gray-100 text-black focus:outline-none  focus:ring-offset-2 transition-colors"
    //             >
    //               <Heart className="mr-2 h-4 inline-flex " />
    //               Save
    //             </button>
    //             <button
    //               type="button"
    //               className="cursor-pointer inline-flex items-center justify-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium   shadow-sm
    //                hover:bg-gray-100 dark:hover:bg-gray-100 text-black focus:outline-none   focus:ring-offset-2 transition-colors"
    //             >
    //               <Share className="mr-2 h-4 inline-flex " />
    //               Share
    //             </button>
    //           </div>
    //         </div>

    //         <div>
    //             Book Details
    //         </div>
    //       </div>

    //       <div className="w-[72%] flex flex-col">
    //             <div className="">
    //             <h1 className="text-3xl font-serif font-bold">{bookDeatils.name}</h1>
    //             <p className="text-md text-muted-foreground">by {bookDeatils.author}</p>
    //              </div>


    //              <div className="mt-2 flex flex-wrap gap-1">
    //                  {bookDeatils.tag.length>0 && bookDeatils.tag.map((tag) => (
    //             <Badge key={tag} variant="outline">
    //               {tag}
    //             </Badge>
    //           ))}
    //           {bookDeatils.tag}
    //         </div>

    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
