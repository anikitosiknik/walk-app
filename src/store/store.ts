import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../reducers/authReducer";
import usersReducer from "../reducers/usersReducer";

export const store = configureStore({
  reducer: {
    user: authReducer,
    users: usersReducer,
  },
});
