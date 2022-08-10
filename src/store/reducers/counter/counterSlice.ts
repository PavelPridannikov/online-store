import {ICounterModel} from "./counter.types";
import {createSlice} from "@reduxjs/toolkit";

const initialState:ICounterModel = {
    counter:1
}

export const counterSlice = createSlice({
    name:'counterSlice',
    initialState,
    reducers:{
        increment(state){
            state.counter = state.counter +1
        },
        decrement(state){
            state.counter = state.counter -1
        }
    }
})

export const {increment,decrement} = counterSlice.actions