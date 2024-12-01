import { createSlice } from "@reduxjs/toolkit";
import type { Formula } from "../../types";
import { ClassSchema } from "../types";



const initialState: ClassSchema = {
  themes: [],
  formulas: [],
};

const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    getData: (state, { payload }) => payload,
    resetData: () => initialState,
  },
});

export const { actions: classActions } = classSlice;
export const { reducer: classReducer } = classSlice;
