import React, {useEffect, useState} from 'react'
import { Message } from './Message';

export const SimpleForm = () => {


    const [form, setFormState] = useState({
        name: "",
        email: "",
    });

    const {name, email} = form;

    useEffect(() => {
        // console.log("Hey!");
        
    }, []);

    useEffect(() => {
        // console.log("The form state changed");
    }, [form]);

    const handleInputChange = (e) => {
        const {target} = e;
        setFormState({...form, [target.name]:target.value })
    }

    return (
        <>
            <h1>UseEffect </h1>
            <hr/>

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                    // onClick={() => { increment(2) }}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="correo@correo.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                    // onClick={() => { increment(2) }}
                />
            </div>
            {(name=== "1234" ) && <Message />}
        </>
    )
}
