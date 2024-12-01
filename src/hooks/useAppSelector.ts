import { TypedUseSelectorHook, useSelector } from "react-redux";
import { StoreSchema } from "../redux/types";


export const useAppSelector:TypedUseSelectorHook<StoreSchema> = useSelector;