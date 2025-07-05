import { configureStore } from "@reduxjs/toolkit";
import userRoleReducer from "./slices/userRoleSlice";

export const store = configureStore({
  reducer: {
    userRole: userRoleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
