import React, {useState, useCallback} from 'react';
import "../02-useEffect/effects.css";
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {


    const [counter, setCounter] = useState(10);

    const increment  = () => {
        setCounter(c => c + 1 );  
    }

    const incrementResult = useCallback(
        () => {
            increment();
        },
        [setCounter],
    )
    
    return (
        <div>
            <h1>UseCallback Hook: {counter} </h1>
            <hr/>

            <ShowIncrement increment={incrementResult} />

        </div>
    )
}
