import axios from "axios"
import toast from "react-hot-toast"
import { setBookDetails, setReview } from "../slices/bookDetailsSlice"
import { setBooks, setCurrentPage, setTotalItem, setTotalPages } from "../slices/bookSlice"

export function setLogin(data, navigate){
    return async(dispatch)=>{
        const toastId = toast.loading('...loading') 
            try {
                const response = await axios.post('http://localhost:8000/api/v1/user/login', data)
                window.localStorage.setItem('token', response.data.token)
                toast.success("Logged in successfully",{
                    id:toastId
                })
                navigate('/browse')
            } catch (error){
                console.log(error)
                toast.error("Something went wrong",{
                    id:toastId
                })
            }
    }
}

export function getBooks(page, navigate){
    return async(dispatch)=>{
        try {
            const booksData = await axios.get(`http://localhost:8000/api/v1/books/getBook?page=${page}&limit=10`)
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
            const data = await axios.get(`http://localhost:8000/api/v1/books/getBookDetails?id=${id}`)
            dispatch(setBookDetails(data.data.bookDetails))
            dispatch(setReview(data.data.bookReview))
        } catch (error) {
            console.log(error)
        }
    }
}