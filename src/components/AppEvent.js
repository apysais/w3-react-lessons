import React from 'react';

function Football() {
    const shoot = (a) => {
        console.log("Shooting the ball with power: " + a);
    }
    return (
        <div>
            <h2>Football</h2>
            <button onClick={() => shoot(5)}>Shoot with power 5</button>
            <button onClick={() => shoot(10)}>Shoot with power 10</button>
        </div>
    );
}

export default Football;