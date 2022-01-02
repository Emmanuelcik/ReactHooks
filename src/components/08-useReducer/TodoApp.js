import React, {useEffect, useReducer} from 'react'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import "./styles.css";


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

    

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = (newTodo)=> {

        dispatch({
            type: "add",
            payload: newTodo,
        });

    }
    
    const handleDelete = (todoID) => {
        const action = {
            type: "delete",
            payload: todoID,
        }

        dispatch(action);
    }
    
    const handleToggle = (todoId) => {

        const action = {
            type: "completed",
            payload: todoId,
        }

        dispatch(action);
        console.log(todos);
    }
    

    return (
        <div>
            <h1>Todo App ({todos.length})</h1>
            <hr/>
            <div className="row">

                <div className="col col-md-6">
                    <TodoList 
                        todos={todos} 
                        handleDelete={handleDelete} 
                        handleToggle={handleToggle}
                    />
                </div>

                <div className='col col-md-6'>
                    
                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                    />

                </div>

            </div>

        </div>
    )
}
