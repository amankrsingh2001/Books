import {Star, TrendingUp} from "lucide-react"
import {motion} from "motion/react"
const text = {
    hidden:{ y: -100,opacity:0 },
    visible:{ y: 0,
        opacity:100,
        transition:{
            duration: 1,

          }
    }, }

export default function Hero(){



    return <div className="flex relative py-20 flex-col gap-4 md:flex-row md:items-center md:justify-between text-black">
                <div className="h-[40rem] w-full flex  items-center ">
                    <div className=" w-[80%] mx-auto">

                    <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2 overflow-hidden">
                  <motion.h1 variants={text} initial="hidden" animate="visible" className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover Your Next Favorite Book
                  </motion.h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join our community of book lovers. Read reviews, rate books, and share your thoughts on your
                    favorite reads.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button className="bg-black px-6 py-3 rounded-sm text-white border-[1px] border-white/30 cursor-pointer">Get Started</button>
                  <button className="bg-white px-6 py-3 rounded-sm text-black border-[2px] border-black/30 cursor-pointer">
                    Browse Books
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="absolute h-72 w-72 bg-pink-500/20 rounded-full blur-3xl" />
                  <div className="absolute -bottom-12 -right-12 h-72 w-72 bg-violet-500/20 rounded-full blur-3xl" />
                  <div className="relative bg-white  p-6 rounded-2xl shadow-xl">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2 flex justify-center">
                        <div className="relative w-32 h-48 overflow-hidden rounded-md shadow-lg transform -rotate-6">
                          <img
                            src="https://shorturl.at/vaS0d"
                            alt="Book cover"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="relative w-32 h-48 overflow-hidden rounded-md shadow-lg transform rotate-6 -ml-8">
                          <img
                            src="https://bit.ly/4iyL3QO"
                            alt="Book cover"
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="col-span-2 space-y-2 text-center">
                        <div className="flex justify-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">Join 10,000+ readers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                   
        
                    </div>
                </div>
              
                
  </div>
}