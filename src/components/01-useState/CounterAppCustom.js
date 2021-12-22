import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterAppCustom = () => {

    const [state, increment, decrement, reset] = useCounter(100)

    return (
        <>
            <h1>Counter With Hook: {state}</h1>
            <hr/>
            <button 
                className="btn btn-outline-success m-2"
                onClick={() => { increment(2) }}
                >
                +1 
            </button>
            <button 
                className="btn btn-outline-warning m-2"
                onClick={() => {decrement(2) }}      
                >
                -1
            </button>
            <button 
                className="btn btn-outline-danger m-2"
                onClick={ reset }      
                >
                Reset
            </button>
        </>
    )
}
