import React from 'react';
import { useState } from "react";

function MyForm() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted:", name, address);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </p>
            <p>
                <label>Address</label>
                <input
                    type="text"
                    value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            </p>
            <button type="submit">Submit</button>
        </form>
    );
}

export default MyForm;