import {AppDispacth, RootState} from "../store/store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


export const useAppDispatch: () => AppDispacth = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector