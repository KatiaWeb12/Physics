import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store";

//кастомный хук useDispatch для типизации
export const useAppDispatch = () => useDispatch<AppDispatch>();