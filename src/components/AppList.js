import React from 'react';

function Car(props) {
    const { index, brand, id } = props;
    return (
        <li id={`car-${index}`} data-db-id={id}>Im a {brand}</li>
    );
}

function Garage() {
    const cars = [
        { id: 1, brand: "Ford" },
        { id: 2, brand: "Chevrolet" },
        { id: 4, brand: "Dodge" },
        { id: 6, brand: "BYD" }
    ];

    return (
        <div>
            <h2>Garage</h2>
            <ul>
                {cars.map((car, index) => (
                    <Car key={index} index={index} brand={car.brand} id={car.id} />
                ))}
            </ul>
        </div>
    );
}

export default Garage;