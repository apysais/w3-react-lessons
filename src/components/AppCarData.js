import React from 'react';

function MyCars() {
    const cars = ['Volvo', 'Kei', 'Truck'];

    return (
        <>
            <h2>My Cars</h2>
            <ul>
                {cars.map((car, index) => (
                    <li key={index}>{car}</li>
                ))}
            </ul>
        </>
    );
}

export default MyCars;