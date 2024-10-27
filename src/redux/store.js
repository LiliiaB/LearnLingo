import { configureStore } from "@reduxjs/toolkit";
import { teachersReducer } from "./teachers/slice";
import authReducer from "./auth/authReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    teachers: teachersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === "development",
});
