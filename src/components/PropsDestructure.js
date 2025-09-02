import React from 'react';

function PropsDestructure({name, ...rest}) {
    return (
        <div>
            <h1>Props Destructure</h1>
            <h2>Name: {name}</h2>
            <h3>Other Info:</h3>
            <ul>
                {Object.entries(rest).map(([key, value]) => (
                    <li key={key}>
                        {key}: {value}
                    </li>
                ))}
            </ul>
            <p>Age : {rest.age}</p>
            <p>Occupation : {rest.occupation}</p>
            <p>Country : {rest.country}</p>
        </div>
    )
}

export default PropsDestructure;