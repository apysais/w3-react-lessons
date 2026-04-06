import React from 'react';
import { useState, useEffect } from 'react';

const AppUseEffect = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    /**
     * The useEffect Hook allows you to perform side effects in your components.
     * Some examples of side effects are: fetching data, directly updating the DOM, and timers.
     * useEffect accepts two arguments. The second argument is optional.
     * useEffect(callback, dependencies)
     *
     * The callback function is executed after the render is committed to the screen.
     * By default, effects run after every completed render, but you can choose to fire them only when certain values have changed.
     * This is what the dependencies array is for.
     *
     * If you pass an empty array [], the effect will only run once after the initial render.
     * If you pass a list of dependencies [dep1, dep2], the effect will only re-run if one of those dependencies has changed since the last render.
     *
     * In this example, we are updating the calculation state variable whenever the count state variable changes.
     * 
     * If we didn't provide the dependencies array, the effect would run after every render, causing an infinite loop of updates.
     * 
     * Note: React guarantees the function passed to useEffect will always see the latest props and state, so you don't need to add them to the dependencies array.
     * However, if you use props or state inside the effect that are not listed in the dependencies array, you might see stale values.
     * In this example, we are safe because we are only using the count state variable, which is included in the dependencies array.
     * 
     * You can read more about useEffect here: https://react.dev/reference/react/useEffect
     * 
     */
    useEffect(() => {
        setCalculation(() => count * 2);
        console.log('useEffect - Updating calculation...' + count);
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
