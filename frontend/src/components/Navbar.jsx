import { useNavigate } from "react-router-dom"
import LinkComp from "./LinkComp"

const linkData =[
    {
            title:"Browse",
            link:'/browse'
    },
    {
            title:"Categories",
            link:'/'
    },
    {
            title:"Profile",
            link:'/'
    }
]

export default function Navbar(){

    const navigate = useNavigate()
    return <div className="fixed top-0 h-20 z-[100] flex backdrop-blur-2xl bg-white/10 border-[1px] border-black/20 ">

     <div className="flex items-center my-auto w-screen justify-evenly ">
            <div className="w-[30%]">  
                <img src="https://imgs.search.brave.com/5594DIIofqYB3w_66DSRbuop_8SHFgpS3WQeMOaA0so/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE1/ODQxMzU5Ny9waG90/by9jb21wb3NpdGlv/bi13aXRoLWJvb2tz/LW9uLXRoZS10YWJs/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9b0xUQnd0SnVp/V1FUdjZOUFlPYzNp/RTNiaVZscDhMSTdP/NkhYMXA3V2xLcz0" className="w-[50px] h-[50px] rounded-full"/>
            </div>

            <div className=" flex space-x-4 ">
                <div className="ml-40  w-[35%]">
                    <input type="text" placeholder="Search" className="px-3 py-2 outline-none border-[1px] rounded-lg w-full"/>
                </div>
                <div className="flex space-x-5  items-center ">
                    {
                        linkData.map((data, index)=>{
                            return <LinkComp key={index} title ={data.title} link={data.link}/>
                        })
                    }   

                </div>
            </div>

            <div className="flex space-x-4">
                <button onClick={()=>(navigate('/signup'))} className="bg-white px-2 py-2 text-sm rounded-lg text-black border-[2px] border-black/30 cursor-pointer">
                    Signup
                </button>
                <button className="bg-black text-white px-2 py-2 text-sm rounded-lg  border-[2px] border-black/30 cursor-pointer">
                    Login
                </button>
            </div>
    </div>
    </div>
}