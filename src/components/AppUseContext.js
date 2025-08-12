import React from 'react';
import {useState, createContext, useContext} from 'react';

const UserContext = createContext();

function Component1() {
    const [user, setUser] = useState({name: 'John Doe', age: 30});

    return (
        <UserContext.Provider value={{user, setUser}}>
            <h1>Hello {user.name}</h1>
            <Component2 />
        </UserContext.Provider>
    );
}

function Component2() {
    const { user } = useContext(UserContext);
    return (
        <>
            <h1>Component 2</h1>
            <p>Age: {user.age}</p>
            <Component3 />
        </>
    );
}

function Component3() {
    const { user } = useContext(UserContext);
    return (
        <>
            <h1>Component 3</h1>
            <p>User Name: {user.name}</p>
            <p>User Age: {user.age}</p>
            <Component4 />
        </>
    );
}

function Component4() {
    return (
        <div>
            <h1>Component 4</h1>
            <p>This is a nested component.</p>
        </div>
    );
}

export default Component1;