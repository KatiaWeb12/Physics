import { type TypedUseSelectorHook, useSelector } from "react-redux";
import type { StoreSchema } from '../store';

//кастомный хук useSelector для типизации
export const useAppSelector: TypedUseSelectorHook<StoreSchema> = useSelector;