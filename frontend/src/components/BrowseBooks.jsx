import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Search, Star } from "lucide-react";

import { getBooks } from "../redux/thunks/api";

export default function BrowseBooks() {
  const books = useSelector((state) => state.books);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBooks(page, navigate));
  }, [page]);

  const prevPageHandler = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const nextPageHandler = () => {
    if (page < books.totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className=" relative top-22 w-screen  bg-[#FAFAFA] ">
      <div className="w-[80%] mx-auto py-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Browse Books</h1>
          <p className="text-muted-foreground text-[#71717A]">
            Discover your next favorite read from our collection.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-4">
            <button variant="outline" size="sm">
              Filters
            </button>
            <select
              id="countries"
              class=" border border-gray-300  text-sm rounded-lg  block w-full p-2.5 outline-none "
            >
              <option selected>Newest First</option>
              <option value="US">Highest Rated</option>
              <option value="CA">Most Popular</option>
              <option value="DE">Title: A-Z</option>
            </select>

            <div></div>
          </div>
        </div>
      </div>
      <div className="flex w-[85%]  mx-auto justify-around ">
        <div className="">
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[240px_1fr]">
      
            <div className="space-y-6 rounded-lg shadow-md p-4">

              <div>
                <h3 className="mb-2 font-medium">Search</h3>
                <div className="relative">

                  <span className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground flex items-center">
                    <Search height={20} width={20} />
                  </span>
                  <input
                    type="search"
                    placeholder="Search books..."
                    className="pl-8 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

            
              <div>
                <h3 className="mb-2 font-medium">Categories</h3>
                <div className="space-y-1">
                  {[
                    "All Categories",
                    "Fiction",
                    "Non-Fiction",
                    "Science Fiction",
                    "Mystery",
                    "Biography",
                    "Self-Help",
                  ].map((category) => (
                    <button
                      key={category}
                      className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-gray-100"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-medium">Rating</h3>
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.5"
                  defaultValue="3.5"
                  className="w-full py-4"
                />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Min: 3.5★
                  </span>
                  <span className="text-sm text-muted-foreground">Max: 5★</span>
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-medium">Publication Year</h3>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="From"
                    className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="number"
                    placeholder="To"
                    className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <p className="text-md  py-3 w-[85%]  mx-auto  text-[#71717A]">
              Showing {books.books.length} out of {books.totalItem} books{" "}
            </p>
          </div>

          <div className="flex flex-wrap   gap-12 justify-center">
            {books.books.map((book, index) => {
              return (
                <Link
                  key={index}
                  to={`/book/${book._id}`}
                  className="group min-w-[300px]"
                >
                  <div className="rounded-xl  overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="relative  overflow-hidden">
                      <img
                        src={book.image || "/placeholder.svg"}
                        alt={`${book.title} cover`}
                        className="w-full h-90 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-gray-700">
                        {book.author}
                      </div>
                    </div>
                    <div className="p-3 space-y-1">
                      <h3 className="font-semibold text-sm truncate">
                        {book.name}
                      </h3>
                      <p className="text-xs text-gray-500">{book.author}</p>

                      <div className="flex items-center gap-1 text-sm">
                        <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                        <span className="font-medium">4.5</span>
                      </div>
                      <div className="flex space-x-3 py-2">
                        {book.tag.map((data, index) => {
                          return (
                            <div key={index}>
                              <p className="text-[10px] bg-[#71717A] px-2 py-1 text-white text-center rounded-2xl capitalize">
                                {data}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center py-4 gap-4">
        <button
          onClick={prevPageHandler}
          className="border-[2px]  border-[#EAEAEA] px-3 py-1 rounded-sm cursor-pointer"
        >
          Previous
        </button>
        <button
          className={`border-[2px] border-[#EAEAEA] px-3 py-1 rounded-md ${
            books.currentPage === 1
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >
          1
        </button>
        <button
          className={`border-[2px] border-[#EAEAEA] px-3 py-1 rounded-md ${
            books.currentPage === 2
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >
          2
        </button>
        <button
          className={`border-[2px] border-[#EAEAEA] px-3 py-1 rounded-md ${
            books.currentPage === 3
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >
          3
        </button>
        <button
          onClick={nextPageHandler}
          className="border-[2px] border-[#EAEAEA] px-3 py-1 rounded-sm cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}
