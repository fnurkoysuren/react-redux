import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../store/counter'

function Counter() {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (<>
        <div style={{ background: "lightblue" }}>
            <div>
                Counter: {count}
            </div>
            <div>
                <button onClick={() => dispatch(decrement())}>-</button>{' '}
                <button onClick={() => dispatch(reset())}>reset</button>{' '}
                <button onClick={() => dispatch(increment())}>+</button>{' '}
                <button onClick={() => dispatch(incrementByAmount(2))}>+2</button>
            </div>
        </div>
    </>)
}

export default Counter