import { ThunkAction } from "@reduxjs/toolkit";
import { AnyAction } from "redux";

import { store } from "../store/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunkAction = ThunkAction<void, RootState, unknown, AnyAction>;
