import { combineReducers } from "@reduxjs/toolkit";
import  booksReducer  from "../slices/bookSlice";
import userReducer from "../slices/userSlice"


export const rootReducer = combineReducers({
    books:booksReducer,
    user:userReducer
})