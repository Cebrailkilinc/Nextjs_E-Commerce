import { createSlice} from "@reduxjs/toolkit";
import { ITodos, ILogin } from "@/types/types";
import { AuthService } from "@/services/authService";

const initialState:ILogin= { 
    isLoading:false, 
    token:""
}    

const authService = new AuthService();
const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{},
    extraReducers: (builder) => {        
      builder
        .addCase(authService.signInWithEmailAndPassword.pending, (state, action) => {
           state.isLoading= true
        })
        // You can chain calls, or have separate `builder.addCase()` lines each time
         .addCase(authService.signInWithEmailAndPassword.fulfilled, (state, action) => {
          state.isLoading=false          
          state.token = action.payload     
             
         })
        // // You can match a range of action types
        // .addMatcher(
        //   isRejectedAction,
        //   // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
        //   (state, action) => {}
        // )
        // // and provide a default case if no other handlers matched
        // .addDefaultCase((state, action) => {})
    },
})

export default AuthSlice.reducer;