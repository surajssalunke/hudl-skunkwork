import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "./rootReducer";
import type { AppDispatch } from "./index";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
