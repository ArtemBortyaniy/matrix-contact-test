import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://technical-task-api.icapgroupgmbh.com/api/";

interface Credentials {
  username: string;
  password: string;
}

interface ApiResponse {
  message: string;
}

export const logIn = createAsyncThunk<ApiResponse, Credentials>(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("login/", credentials);
      toast.success("you are logged in");
      return res.data as ApiResponse;
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        toast.error("Invalid credentials");
      } else if (error.response && error.response.status === 500) {
        toast.error("Server error");
      } else {
        toast.error("An error occurred");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
