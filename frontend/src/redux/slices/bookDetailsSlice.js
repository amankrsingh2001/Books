import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    details:{},
    review:[]

}

export const bookDetailSlice = createSlice({
    name:"bookDetail",
    initialState,
    reducers:{
        setBookDetails(state, action){
            state.details = action.payload
        },
        setReview(state, action){
            state.review = action.payload
        }
        
    }
})

export const { setBookDetails, setReview } = bookDetailSlice.actions
export default bookDetailSlice.reducer