import React, {useState, useEffect} from 'react'
import "../components/02-useEffect/effects.css";

export const useFetch = (url) => {
    
    const [state, setState] = useState({data: null, loading: true, error: null});


    useEffect(() => { 

        setState({data:null, loading: true, error: null});
        
        fetch(url)
            .then((res) => res.json() )
            .then( data => {
                setState({
                    loading: false,
                    error: null,
                    data
                });
            });

        // return () => {
        //     cleanup
        // }
    }, [url]);

    return state;

}
