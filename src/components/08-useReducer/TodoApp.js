import React, {useEffect, useReducer} from 'react'
import { todoReducer } from './todoReducer';
import "./styles.css";
import { useForm } from '../../hooks/useForm';


const init = () => {

    let dataInLocal = localStorage.getItem("todos");
    return dataInLocal ? JSON.parse(dataInLocal) : [];

    // return [{
    //     id: new Date().getTime(),
    //     desc: "Learning react",
    //     done: false,
    // }];
}

export const TodoApp = () => {

    // const [state, dispatch] = useReducer(reducer, initialState, init)
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [ {description}, handleInputChange, reset ] = useForm({
        description: "",
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoID) => {
        const action = {
            type: "delete",
            payload: todoID,
        }

        dispatch(action);
    }
    
    console.log(description);

    const handleSubmit = (e) =>  {
        e.preventDefault();

        if(description.trim().length <= 1 ){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        }

        const action = {
            type: "add",
            payload: newTodo
        }

        dispatch(action);
        reset();
    }

    return (
        <div>
            <h1>Todo App ({todos.length})</h1>
            <hr/>
            <div className="row">

                <div className="col col-md-6">
                    <ul className="list-group list-group-flush">
                        {
                            todos.map( (todo, i) => (
                                <li
                                    key={todo.id}
                                    className="list-group-item"
                                >
                                    <p className='text-center'>{i + 1}.- { todo.desc} </p>
                                    <button
                                        onClick={() => { handleDelete( todo.id)}}
                                        className="btn btn-danger"
                                    >
                                        Borrar
                                    </button>
                                </li>
                            )) 
                        }
                    </ul>
                </div>
                <div className='col col-md-6'>
                    <h4>Agregar ToDo</h4>
                    <hr/>

                    <form onSubmit={handleSubmit}>

                        <input
                            className='form-control'
                            type="text"
                            name="description"
                            placeholder="Aprender..."
                            autoComplete='off'
                            onChange={handleInputChange}
                            value={description}
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary d-block mt-2"
                        > 
                            Agregar 
                        </button>
                    </form>

                </div>

            </div>

        </div>
    )
}
