import React, {FC} from 'react';
import './App.css';

import {counter} from "./store/counter";
import {observer} from "mobx-react-lite";

export const Counter: FC = observer(() => {
    return (
        <div className='counter'>
            <div> {`Counter : ${counter.count}`}</div>
            <div> {counter.total}</div>
            <div className='buttons'
            >
                <button className='btn' onClick={() => counter.increment()}>+</button>
                <button className='btn' onClick={() => counter.decrement()}>-</button>
            </div>
        </div>
    )
})



