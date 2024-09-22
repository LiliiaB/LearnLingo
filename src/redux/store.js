import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { authReducer } from "./auth/slice";
import { teachersReducer } from "./teachers/slice";

/* const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
}; */

const teachersPersistConfig = {
  key: "teachers",
  storage,
  whitelist: ["items", "favorites"],
};

export const store = configureStore({
  reducer: {
    //auth: persistReducer(authPersistConfig, authReducer),
    teachers: persistReducer(teachersPersistConfig, teachersReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);