import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../components/Loading";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import BrowseBooks from "../components/BrowseBooks";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import BookDeatil from "../components/BookDetail";
import ErrorPage from "../components/Auth/ErrorPage";



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
                    path:'/books',
                    element:<BrowseBooks/>
                },{
                    path:'/book/:id',
                    element:<BookDeatil/>
                },
                // {
                //     path:'/profile',
                //     element:<UserProfile/>
                // }
            ]
    },{
        path:'/login',
        element:<Login/>
    },{
        path:'/signup',
        element:<Signup/>
    },
    // error handler 
    {
        path:"*",
        element:<ErrorPage/>
    }
])

export default router