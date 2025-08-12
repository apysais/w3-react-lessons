import React from 'react';
import { useState } from 'react';

const AppUseState = () => {
    const [count, setCount] = useState(0);
    const [fruits, setFruits] = useState(['Apple', 'Banana', 'Cherry']);
    const [sports, setSports] = useState([
        {
            id: 1,
            name: 'Soccer'
        },
        {
            id: 2,
            name: 'Basketball'
        },
        {
            id: 3,
            name: 'Tennis'
        }
    ]);

    const handleAddSport = () => {
        const newSport = {
            id: sports.length + 1,
            name: `Sport ${sports.length + 1}`
        };
        setSports([...sports, newSport]);
    };

    const handleAddFruits = () => {
        const newFruit = `Fruit ${fruits.length + 1}`;
        setFruits([...fruits, newFruit]);
    };

    const updateSports = (id, newName) => {
        setSports(sports.map(sport => sport.id === id ? { ...sport, name: newName } : sport));
    };

    return (
        <div>
            <div>
                <h2>Fruits</h2>
                <ul>
                    {fruits.map((fruit, index) => (
                        <li key={index}>{fruit}</li>
                    ))}
                </ul>
                <button onClick={handleAddFruits}>Add Fruit</button>
            </div>
            <div>
                <h2>Sports</h2>
                <ul>
                    {sports.map((sport) => (
                        <li key={sport.id}>{sport.name}</li>
                    ))}
                </ul>
                <button onClick={handleAddSport}>Add Sport</button>
                <button onClick={() => updateSports(2, 'Updated Sport')}>Update Sport</button>
            </div>
            <div>
                <h1>Count: {count}</h1>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        </div>
    );
};

export default AppUseState;
