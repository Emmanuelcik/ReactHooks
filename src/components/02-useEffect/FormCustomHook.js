import React, {useEffect, useState} from 'react';
import { useForm } from '../../hooks/useForm';
import "./effects.css";
export const FormCustomHook = () => {


    const [form, handleInputChange] = useForm({
        name: "",
        email: "",
        password: "",
    });

    const {name, email, password} = form;

    useEffect(()=> {
        console.log("email cambió");
    }, [email]);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(form)
    }
    // const handleInputChange = (e) => {
    //     const {target} = e;
    //     setFormState({...form, [target.name]:target.value })
    // }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form with custom hook </h1>
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
            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*****"
                    value={password}
                    onChange={handleInputChange}
                    // onClick={() => { increment(2) }}
                />
            </div>

            <input type="submit" value="Guardar" className="btn btn-success" />
        </form>
    )
}
