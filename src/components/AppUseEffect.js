import React from 'react';
import { useState, useEffect } from 'react';

const AppUseEffect = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('Updating count...');
    //         setCount((count) => count + 1);
    //     }, 1000);
    // });

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>calculation: {calculation}</p>
        </div>
    );
};

export default AppUseEffect;
