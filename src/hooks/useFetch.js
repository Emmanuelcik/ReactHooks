import React, {useState, useEffect, useRef} from 'react'
import "../components/02-useEffect/effects.css";

export const useFetch = (url) => {
    
    const isMounted = useRef(true);
    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        }

    }, []);

    useEffect(() => { 

        setState({data:null, loading: true, error: null});
        
        fetch(url)
            .then((res) => res.json() )
            .then( data => {

                if(isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }else{
                    console.log("set state no se llamó");
                }
            })
            .catch(err => {
                setState({
                    data: null,
                    loading: false,
                    error: "something went wrong",
                });
            })

        // return () => {
        //     cleanup
        // }
    }, [url]);

    return state;

}
