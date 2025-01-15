import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
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
    //добавление класса в store
    getData: (_, { payload }: PayloadAction<ClassSchema>) => payload,
    //добавление тем в store
    setThemes: (state, { payload }: PayloadAction<ClassSchema['themes']>) => {
      state.themes = payload;
    },
    //очищение store
    resetData: () => initialState,
  },
});

export const { actions: classActions } = classSlice;
export const { reducer: classReducer } = classSlice;
