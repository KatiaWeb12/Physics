import { createSlice } from "@reduxjs/toolkit";
import type { ClassSchema } from "../types";

const initialState: ClassSchema = {
  themes: [],
  formulas: [],
};

const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    getData: (_, { payload }) => payload,
    resetData: () => initialState,
  },
});

export const { actions: classActions } = classSlice;
export const { reducer: classReducer } = classSlice;
