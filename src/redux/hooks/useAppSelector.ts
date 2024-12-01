import { type TypedUseSelectorHook, useSelector } from "react-redux";
import type { StoreSchema } from '../store';


export const useAppSelector: TypedUseSelectorHook<StoreSchema> = useSelector;