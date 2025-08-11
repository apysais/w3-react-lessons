import React from 'react';
import { useState } from 'react';

function MyForm() 
{
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted:", inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={inputs.name || ""}
                    onChange={handleChange}
                />
            </p>
            <p>
                <label>Address</label>
                <input
                    type="text"
                    name="address"
                    value={inputs.address || ""}
                    onChange={handleChange}
                />
            </p>
            <button type="submit">Submit</button>
        </form>
    );
}

export default MyForm;