import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/AuthSlice";
import filterReducer from "../features/FilterSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    filter: filterReducer,
  },
});
