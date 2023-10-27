import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { logIn } from "./operations";

interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logIn.fulfilled, (state) => {
      state.isLoggedIn = true;
    });
  },
});

export const authReducer = authSlice.reducer;
