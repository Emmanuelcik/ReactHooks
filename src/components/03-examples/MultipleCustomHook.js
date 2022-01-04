import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHook = () => {

    const {counter, increment } = useCounter(1);

    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

    const state = useFetch(url);
    
    const {loading, data} = state;

    // const {author, quote} = data[0] | undefined;
    const {author, quote} = !!data && data[0];

    console.log(author);
    console.log(quote);
    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr/>

            {
                loading ?
                    (
                        <div className="alert alert-info text-center">
                            loading...
                        </div>
                    ) 
                : 
                    (
                        <blockquote className="blockquote text-right">
                            <p className='mb-2'>
                                {quote}
                            </p>

                            <footer className="blockquote-footer">
                                {author}
                            </footer>
                        </blockquote>
                    ) 
            }
        
            <button 
                className="btn btn-success"
                onClick={increment}
            > 
                Siguiente frase 
            </button>

        </div>
    )
}
