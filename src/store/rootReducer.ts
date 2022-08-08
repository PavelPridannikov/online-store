import {combineReducers} from "redux";
import {productApi} from "./product/product.api";


export const rootReducer = combineReducers({
        [productApi.reducerPath]:productApi.reducer,
})

