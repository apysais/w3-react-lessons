import React from 'react';


function Car(props) {
  return <div>
        <h2>Im a car</h2> 
        <p>Brand : {props.brand}</p>
        <p>Model : {props.model}</p>
    </div>;
}

export default Car;
