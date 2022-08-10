import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./rootReducer";
import {productApi} from "./reducers/product/product.api";


export const store = configureStore({
    reducer:rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(productApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispacth = typeof store.dispatch
