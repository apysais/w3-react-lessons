import React from 'react';
import {memo} from 'react';
import {generateUniqueIdWithTimestamp} from './Utility';


const Todos = ({todos}) => {
    console.log('child render');
    console.log(todos);
    
    return (
        <>
            <h2>My Todos</h2>
            <ul>
                {todos.map((todo, index) => {
                    return <li key={index} data-id={todo.id}>{todo.text} {generateUniqueIdWithTimestamp()}</li>;
                })}
                {/* <button onClick={addTodo}>Add Todo</button> */}
            </ul>
        </>
    );
};

export default memo(Todos);