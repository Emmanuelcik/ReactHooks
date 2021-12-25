import React, {useLayoutEffect, useRef, useState} from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

export const LayoutEffect = () => {

    const [counter, increment ] = useCounter(1);
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    const state = useFetch(url);
    const {data} = state;
    // const {author, quote} = data[0] | undefined;
    const {quote} = !!data && data[0];

    const pTag = useRef();
    const [boxsize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect());
        setBoxSize(pTag.current.getBoundingClientRect() );
        
    }, [quote]);

    console.log(quote);
    return (
        <div>
            <h1>Layout Effect</h1>
            <hr/>

            <blockquote className="blockquote text-right">
                <p className='mb-2' ref={pTag} >
                    {quote}
                </p>

            </blockquote>
            <pre>
                { JSON.stringify(boxsize, null, 3) }
            </pre>
            <button 
                className="btn btn-success"
                onClick={increment}
            > 
                Siguiente frase 
            </button>

        </div>
    )
}
