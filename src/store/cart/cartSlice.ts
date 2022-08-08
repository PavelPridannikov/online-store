import {IProduct} from "../product/product.types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: IProduct[] = []

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem: (state, action:PayloadAction<IProduct>) => {
            state.push(action.payload)
        },
    //     removeItem: (state,action:PayloadAction<{id:number}>) = {
    //         return state.filter(item => item.id !== action.payload)
    // }
    }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions