import {IProduct} from "../product/product.types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";



const initialState:IProduct[]=[]
export const favoritesSlice = createSlice({
    name:'favorites',
    initialState,
    reducers:{

        addFavorites:(state,action:PayloadAction<IProduct>) => {
            state.push(action.payload)

        },
        removeFavorites:(state,action:PayloadAction<IProduct>) =>{
            return state.filter(f => f.id !== action.payload.id)

        }
    }

})

export const favoritesReducer = favoritesSlice.reducer
export const favoritesAction = favoritesSlice.actions