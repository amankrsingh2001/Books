import { combineReducers } from "@reduxjs/toolkit";
import  booksReducer  from "../slices/bookSlice";
import userReducer from "../slices/userSlice"
import bookDetailReducer from "../slices/bookDetailsSlice"

export const rootReducer = combineReducers({
    books:booksReducer,
    user:userReducer,
    bookDetail:bookDetailReducer
})