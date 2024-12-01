import {
  configureStore,
  type ReducersMapObject,
} from '@reduxjs/toolkit';
import { classReducer } from './class/slices/classSlice';
import { ClassSchema } from './class/types';

export interface StoreSchema {
  class: ClassSchema;
}
const reducers: ReducersMapObject<StoreSchema> = {
  class: classReducer
};
export const store = configureStore({
  reducer: reducers,
});

export type AppDispatch = (typeof store)['dispatch'];
