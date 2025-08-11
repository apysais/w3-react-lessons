import React from 'react';
import { useState } from 'react';

function onChange(event, setInputs) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
}

function onSubmit(event, inputs)
{
    event.preventDefault();
    console.log("Form submitted:", inputs);
}

function Input(props) {
    return (
        <>
            <label>{props.label}</label>
            <input
                type="text"
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
        </>
    );
}

function SelectInput(props)
{
    return (
        <>
            <label>{props.label}</label>
            <select name={props.name} value={props.value} onChange={props.onChange}>
                <option value="">Select...</option>
                {props.data.map(item => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))}
            </select>
        </>
    );
}

function MyForm() 
{
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => onChange(event, setInputs);
    const handleSubmit = (event) => onSubmit(event, inputs);

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <Input
                    label="Name"
                    name="name"
                    value={inputs.name || ""}
                    onChange={handleChange}
                />
            </p>
            <p>
                <Input
                    label="Address"
                    name="address"
                    value={inputs.address || ""}
                    onChange={handleChange}
                />
            </p>
            <p>
                <SelectInput
                    label="Select"
                    name="sel"
                    value={inputs.sel || ""}
                    onChange={handleChange}
                    data={[
                        { value: '1', label: 'Option 1' },
                        { value: '2', label: 'Option 2' },
                        { value: '3', label: 'Option 3' },
                    ]}
                />
            </p>
            <button type="submit">Submit</button>
        </form>
    );
}

export default MyForm;