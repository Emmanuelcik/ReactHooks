

const initialState = [{
    id: 1,
    todo: "Comprar leche",
    done: false,    
}];

const toDoReducer = (state = initialState, action) => {
    
    if(action?.type === "agregar"){
        return [...state, action.payLoad];
    }

    return state;
}

let todos = toDoReducer();

const newTodo = {
    id: 2,
    todo: "Comprar leche",
    done: false,
}

const action = {
    type: "agregar",
    payLoad: newTodo,
    // newTodo
}

todos = toDoReducer(todos, action);
console.log(todos);
