import React from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { increment } from './store/counterSlice';

export default function ReduxTest () {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    return <div onClick={() => dispatch(increment())}>
    <h2>redux check:</h2>
    <p>click me to increase state: {count}</p>
  </div>
}