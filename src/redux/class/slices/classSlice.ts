import { createSlice } from "@reduxjs/toolkit";
import type { ClassSchema } from "../types";

//начальное значение
const initialState: ClassSchema = {
  themes: [],
  formulas: [],
};

const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    //добавление данных в store
    getData: (_, { payload }) => payload,
    //очещение store
    resetData: () => initialState,
  },
});

export const { actions: classActions } = classSlice;
export const { reducer: classReducer } = classSlice;
