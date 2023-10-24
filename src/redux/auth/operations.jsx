import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://technical-task-api.icapgroupgmbh.com/api/";

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("login/", credentials);
      toast.success("you are logged in");
      return res.data;
    } catch (error) {
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
