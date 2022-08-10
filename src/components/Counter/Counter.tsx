import React from 'react';
import {useAppSelector} from "../../hooks/useStoreHook";
import {useDispatch} from "react-redux";
import {decrement, increment} from "../../store/reducers/counter/counterSlice";
import {CounterContainerSC} from "./style";



const Counter = () => {
    const {counter} = useAppSelector(state => state.counter)
    const dispatch = useDispatch()
    return (
        <CounterContainerSC>
            <div>
                {counter}
            </div>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
        </CounterContainerSC>
    );
};

export default Counter;