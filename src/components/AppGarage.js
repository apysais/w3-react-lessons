import React from "react";
import Car from './AppCar';

function Garage() {
    const hybrid = { name: "BYD", model: "Seal" };
    return (
        <div>
        <h2>Garage</h2>
        <Car brand="Ford" model="Mustang" />
        <Car brand="Chevrolet" model="Camaro" />
        <Car brand="Dodge" model="Challenger" />
        <Car brand={hybrid.name} model={hybrid.model} />
        </div>
    );
}

export default Garage;
