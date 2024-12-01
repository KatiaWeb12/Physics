import { configureStore } from "@reduxjs/toolkit";
import { classReducer } from "./slices/classSlice";

export const store = configureStore({
  reducer: {
   class: classReducer
  }
});
