import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export class AuthService {
  signInWithEmailAndPassword = createAsyncThunk(
    "users/signInWithEmailAndPassword",
    async () => {
      try {
        const response = await axios.post(process.env.BASE_URL + "/login", {
          email: "ceboas@gmail.com",
          password: "123456",
        });        
        return response.data;
      } catch (error) {
        console.error(error);       
      }
    }
  );

  fetchUserById = createAsyncThunk("users/fetchByIdStatus", async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      return response.data;
    } catch (error) {
      console.error(error);      
    }
  });
}
