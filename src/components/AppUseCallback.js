import React, {useState, useCallback} from 'react';
import Todo from './Todo';

const TodoAppCallBack = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'Learn React',
            completed: false
        },
        {
            id: 2,
            text: 'Learn Redux',
            completed: false
        }
    ]);

    const increment = () => {
        setCount( (c) => c + 1);
    };

    const addTodo = useCallback((id, text) => {
        // const id = todos.length + 1;
        // const text = `New Todo ${todos.length + 1}`;
        const newTodo = {
            id: id,
            text: text,
            completed: false
        };
        setTodos((dataTodos) => [...dataTodos, newTodo]);
    }, [todos]);

    return(
        <>
            <Todo
                todos = {todos}
            />
            <button onClick={() => addTodo(todos.length + 1, `New Todo ${todos.length + 1}`)}>
                Add Todo
            </button>
            <hr />
            <div>
                Count : {count}
                <button onClick={increment}>Increment</button>
            </div>  
        </>
    );
};

export default TodoAppCallBack;