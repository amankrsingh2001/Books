import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentPage:localStorage.getItem('currentPage')?JSON.parse(localStorage.getItem('currentPage')):0,
    totalPages:localStorage.getItem('totalPages')?JSON.parse(localStorage.getItem('totalPages')):0,
    totalItem:localStorage.getItem('totalItems')?JSON.parse(localStorage.getItem('totalItems')):0,
    books:localStorage.getItem("books")?JSON.parse(localStorage.getItem('books')):[],

}

export const booksSlice = createSlice({
    name:"book",
    initialState,
    reducers:{
        setBooks(state, action){
            state.books = action.payload
        },
        setCurrentPage(state, action){
            state.currentPage = action.payload
        },
        setTotalPages(state,action){
            state.totalPages = action.payload
        },
        setTotalItem(state, action){
            state.totalItem = action.payload
        }
    }
})

export const {setBooks} = booksSlice.actions
export default booksSlice.reducer