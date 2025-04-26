import axios from "axios"
import toast from "react-hot-toast"
import { setBookDetails, setReview } from "../slices/bookDetailsSlice"
import { setBooks, setCurrentPage, setTotalItem, setTotalPages } from "../slices/bookSlice"
import { setToken } from "../slices/userSlice"

export function setLogin(data, navigate){
    return async(dispatch)=>{
        
        const toastId = toast.loading('...loading') 
         try {
            if(data.email == "" || data.password == ""){
                throw new Error("Data isnt valid")
            }
               
                const response = await axios.post(`${process.env.VITE_BASE_URL}/user/login`, data)
                dispatch(setToken(response.data.token))
                toast.success("Logged in successfully",{
                    id:toastId
                })
                navigate('/books')
            } catch (error){
                
                toast.error(error.message || "Something went wrong",{
                    id:toastId
                })
            }
    }
}

export function getBooks(page, navigate){
    return async(dispatch)=>{
        try {
            const booksData = await axios.get(`${process.env.VITE_BASE_URL}/books/getBook?page=${page}&limit=10`)
            dispatch(setBooks(booksData.data.books))
            dispatch(setCurrentPage(booksData.data.currentPage))
            dispatch(setTotalPages(booksData.data.totalPages))
            dispatch(setTotalItem(booksData.data.totalItems))
        } catch (error) {
                console.log(error)
        }
    }
}

export function setBooksDetailsById(id, navigate){
    return async(dispatch)=>{
        try {
            const data = await axios.get(`${process.env.VITE_BASE_URL}/books/getBookDetails?id=${id}`)
            dispatch(setBookDetails(data.data.bookDetails))
            dispatch(setReview(data.data.bookReview))
        } catch (error) {
            console.log(error)
        }
    }
}