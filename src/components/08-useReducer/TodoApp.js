import React, {useReducer} from 'react'
import { todoReducer } from './todoReducer';
import "./styles.css";

const initialState = [{
    id: new Date().getTime(),
    desc: "Learning react",
    done: false,
}];

export const TodoApp = () => {

    // const [state, dispatch] = useReducer(reducer, initialState, init)
    const [todos] = useReducer(todoReducer, initialState)
    console.log(todos)
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

                    <form>

                        <input
                            className='form-control'
                            type="text"
                            name="description"
                            placeholder="Aprender..."
                            autoComplete='off'
                        />
                    </form>

                    <button 
                        className="btn btn-outline-primary d-block mt-2"
                    > 
                        Agregar 
                    </button>
                </div>

            </div>

        </div>
    )
}
