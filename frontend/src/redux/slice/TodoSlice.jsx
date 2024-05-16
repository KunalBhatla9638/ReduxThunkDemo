import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("fetchTodos", async (name) => {
    console.log(name)
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    return await response.json();
})

const TodoSlice = createSlice({
    name : "todo",
    initialState : {
        isLoading : false,
        isError : false,
        data : null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) =>{
            state.isLoading = true;
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) =>{
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchTodos.rejected, (state, action) =>{
            console.log("Errro -->", action.payload)
            state.isError = true;
        })
    }
})

export default TodoSlice.reducer