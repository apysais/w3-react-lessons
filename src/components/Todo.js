import React from 'react';
import {memo} from 'react';

const Todos = ({todos}) => {
    console.log('child render');
    console.log(todos);
    return (
        <>
            <h2>My Todos</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </>
    );
};

export default memo(Todos);