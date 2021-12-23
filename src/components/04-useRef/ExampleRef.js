import React ,{useState} from 'react';
import {MultipleCustomHook} from "../03-examples/MultipleCustomHook";
import "../02-useEffect/effects.css";


export const ExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Example ref</h1>
            <hr/>

            {show && <MultipleCustomHook />}

            <button
                className="btn btn-primary mt-5"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Example ref
            </button>
        </div>
    )
}
