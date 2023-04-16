import { createSlice } from "@reduxjs/toolkit";


interface Token{
    token: string;
}
const initialState:Token  ={
    token:""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {}
})

export default authSlice.reducer