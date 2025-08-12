import React, {useState, useEffect, useRef} from 'react';

function AppUseRef() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();

    useEffect(() => {
        prevCountRef.current = count;
    }, [count]);

    return (
        <div>
            <h1>Current Count: {count}</h1>
            <h2>Previous Count: {prevCountRef.current}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

function AppPreviousInput()
{
    const [inputValue, setInputValue] = useState('');
    const prevInputValueRef = useRef();

    useEffect(() => {
        prevInputValueRef.current = inputValue;
    }, [inputValue]);

    return (
        <div>
            <h1>Current Input: {inputValue}</h1>
            <h2>Previous Input: {prevInputValueRef.current}</h2>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    );
}

export {AppUseRef, AppPreviousInput};
