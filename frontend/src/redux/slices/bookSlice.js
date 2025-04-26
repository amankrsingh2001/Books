import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentPage:1,
    totalPages:0,
    totalItem:0,
    books:[],

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

export const {setBooks,setCurrentPage,setTotalPages,setTotalItem} = booksSlice.actions
export default booksSlice.reducer