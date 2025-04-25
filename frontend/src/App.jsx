import React,{ useState } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-screen bg-[#FAFAFA]">
        <Navbar/>
        <Outlet/>
      </div>
    </>
  )
}

export default App
