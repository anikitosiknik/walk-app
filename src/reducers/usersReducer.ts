import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UsersStateInterface } from "../types/usersTypes";

const initialState: UsersStateInterface = {
  users: [],
  currentUserId: null,
  pageInfo: {
    current: 1,
    numberOfPages: 1,
    pageSize: 0,
  },
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsersAction: (state, action: PayloadAction<UsersStateInterface>) => {
      return { ...state, ...action.payload };
    },
    setCurrentUserAction: (state, action: PayloadAction<number>) => {
      return { ...state, currentUserId: action.payload };
    },
  },
});

export const { setUsersAction, setCurrentUserAction } = usersSlice.actions;

export default usersSlice.reducer;
