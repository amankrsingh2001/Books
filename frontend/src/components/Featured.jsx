import { Star, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { BASE_URL } from "../redux/thunks/api";

export default function Featured() {
  const [featuredBooks, setFeaturedBooks] = useState([]);


  const getFeaturedBooks = async () => {
    try {
      const booksData = await axios.get(
        `${BASE_URL}/books/featuredBooks`
      );
      setFeaturedBooks(booksData.data.books);
      console.log(booksData.data.books);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeaturedBooks();
  }, []);

  {
    featuredBooks.length <= 0 && (
      <div>
        <Loading />
      </div>
    );
  }

  const text = {
    hidden:{ x: -100 },
    visible:{ x: 0,
        transition:{
            duration: 1,

          }
    },
    
  }

  return (
    <div className="w-screen min-h-[400px] space-y-6">
      <div className="flex items-center justify-between w-[80%] mx-auto">
        <div className="space-y-1">
          <h2 variants={text} initial="hidden" animate="visible" className="text-2xl font-bold tracking-tight">Featured Books</h2>
          <p className="text-muted-foreground text-[#71717A]">
            Explore our handpicked selection of must-read books.
          </p>
        </div>
        <div className="flex items-center gap-6 ">
          <button variant="ghost" size="sm" className="inline-block">
            <TrendingUp className="mr-2 h-4 w-4 inline-block" />
            Trending
          </button>
          <button variant="ghost" size="sm" className="text-center">
            New Releases
          </button>
        </div>
      </div>
      <div className="w-[80%] mx-auto overflow-x-hidden">
      <div className="overflow-hidden w-full  py-6">
      <motion.div
        className="flex gap-6 animate-carousel"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {[...featuredBooks, ...featuredBooks].map((book, index) => (
          <Link key={index} href={`/books/${book.id}`} className="group min-w-[250px] max-w-[250px]">
            <div className="rounded-xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative  overflow-hidden">
                <img
                  src={book.image || "/placeholder.svg"}
                  alt={`${book.title} cover`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-gray-700">
                  {book.author}
                </div>
              </div>
              <div className="p-3 space-y-1">
                <h3 className="font-semibold text-sm truncate">{book.name}</h3>
                <p className="text-xs text-gray-500">{book.author}</p>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span className="font-medium">4.5</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
      
      </div>
    </div>
  );
}
