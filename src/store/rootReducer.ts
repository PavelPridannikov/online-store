import {combineReducers} from "redux";
import {productApi} from "./reducers/product/product.api";
import {cartReducer} from "./reducers/cart/cartSlice";
import {counterSlice} from "./reducers/counter/counterSlice";


export const rootReducer = combineReducers({
        [productApi.reducerPath]:productApi.reducer,
        cart:cartReducer,
        counter:counterSlice.reducer
})

