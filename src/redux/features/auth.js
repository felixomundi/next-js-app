import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated:false,
    isError:null,
    user:{},
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:()=>{
        Login:(state, action)=>{
          return  state.isAuthenticated = true;
        }

    },
    extraReducers:(builder)=>{},
})

export const {Login} = authSlice.actions;
export default authSlice.reducer;