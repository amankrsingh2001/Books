import axios from "axios"
import toast from "react-hot-toast"
import { setBooks } from "../slices/bookSlice"

export function setLogin(data, navigate){
    return async(dispatch)=>{
        const toastId = toast.loading('...loading') 
            try {
                console.log(data)
                const response = await axios.post('http://localhost:8000/api/v1/user/login', data)
                window.localStorage.setItem('token', response.data.token)
                toast.success("Logged in successfully",{
                    id:toastId
                })
                const booksData = await axios.get('http://localhost:8000/api/v1/books/getBook?page=1&limit=10')
                console.log(booksData)
                window.localStorage.setItem('books', JSON.stringify(booksData.data.books))
                window.localStorage.setItem('totalPages', JSON.stringify(booksData.data.totalPages))
                window.localStorage.setItem('totalItems', JSON.stringify(booksData.data.totalItems))
                window.localStorage.setItem('currentPage', JSON.stringify(booksData.data.currentPage))
                navigate('/browse')
            } catch (error){
                console.log(error)
                toast.error("Something went wrong",{
                    id:toastId
                })
            }
    }
}

// export function setBooksData(data, navigate){
//     return async(dispatch)=>{

//     }
// }