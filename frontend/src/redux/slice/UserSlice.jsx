import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("fetchUsers", async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    return await response.json();
})

const userSlice = createSlice({
    name : "user",
    initialState : {
        isLoading : false, 
        isError : false,
        data : null
    },
    extraReducers : (builder) =>{

        builder.addCase(fetchUsers.pending, (state, action) =>{
            state.isLoading = true
        })

        builder.addCase(fetchUsers.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.data = action.payload
        })

        builder.addCase(fetchUsers.rejected, (state, action) =>{
            console.error('Error --> ', action)
            state.isError = true
        })

    }
})

export default userSlice.reducer