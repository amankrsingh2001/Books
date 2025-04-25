import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../components/Loading";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import BrowseBooks from "../components/BrowseBooks";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";

const App = lazy(()=>import("../App"))

const router = createBrowserRouter([
    {
        path:'/',
        element:(<Suspense fallback={<Loading/>}>
                   <App/>             
            </Suspense>),
            children:[
                {
                    path:"/",
                    element:[<Hero/>,<Featured/>]
                },
                {
                    path:'/browse',
                    element:<BrowseBooks/>
                }
            ]
    },{
        path:'/login',
        element:<Login/>
    },{
        path:'/signup',
        element:<Signup/>
    }

   
    
    
    // error handler 
    // {
    //     path:"*"
    // }
])

export default router