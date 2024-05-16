import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducers from './slice/TodoSlice'
import userSliceReducers from "./slice/UserSlice"

export const Store = configureStore({
    reducer : {
        todo : todoSliceReducers,
        user : userSliceReducers,
    }
})