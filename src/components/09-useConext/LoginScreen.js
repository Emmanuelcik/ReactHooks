import React, { useContext } from 'react'
import { UserContext } from './UserContext';


export const LoginScreen = () => {
    
    const {user, setUser} = useContext(UserContext);
    console.log(user);
    const obj = {
        id: 1,
        nombre: "nose",
    }
    return (
        <div>
            <h1>Login Screen</h1>
            <hr/>
            <button 
                className='btn btn-primary' 
                onClick={ () => {
                    setUser(obj);
                }}
            >
                Login
            </button>
        </div>
    )
}
