import {
  configureStore,
  type ReducersMapObject,
} from '@reduxjs/toolkit';
import { classReducer } from './class/slices/classSlice';
import { ClassSchema } from './class/types';

//типизация reducers
export interface StoreSchema {
  class: ClassSchema;
}
//типизация store
const reducers: ReducersMapObject<StoreSchema> = {
  class: classReducer,
};
//создание store
export const store = configureStore({
  reducer: reducers,
});

//типизация dispatch
export type AppDispatch = (typeof store)['dispatch'];
