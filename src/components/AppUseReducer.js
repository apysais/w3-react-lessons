import React, {useReducer} from 'react';

const todoData = [
    {
        id: 1,
        title: 'Todo 1',
        complete: false
    },
    {
        id: 2,
        title: 'Todo 2',
        complete: false
    },
    {
        id: 3,
        title: 'Todo 3',
        complete: true
    },
    {
        id: 4,
        title: 'Todo 4',
        complete: true
    },
    {
        id: 5,
        title: 'Todo 4',
        complete: false
    }
];

const reducer = (state, action) => {
    switch(action.type) {
        case 'complete':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
            );
        default:
            return state;
    }
};

function TodoApp() {
    /**
     * useReducer returns an array containing two elements:
        The current state value.
        A dispatch function.
     */
    const [todos, dispatch] = useReducer(reducer, todoData);

    const handleComplete = (todo) => {
        dispatch({type:'complete', id: todo.id});
    };

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} className={`todo-id-${todo.id}`}>
                        <input type="checkbox" checked={todo.complete} onChange={() => handleComplete(todo)} />
                        <span style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>
                            {todo.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;