import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthStateInterace } from "../types/authTypes";

const initialState: AuthStateInterace = {
  email: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<AuthStateInterace>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { loginAction } = authSlice.actions;

export default authSlice.reducer;
