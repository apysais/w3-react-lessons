import React from 'react';

const PropsSimple = (props) => {
  return (
    <div>
      <h1>Props Simple Example</h1>
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
      <p>Gender : {props.gender}</p>
    </div>
  );
};

export default PropsSimple;
