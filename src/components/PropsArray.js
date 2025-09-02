import React from 'react';

const PropsArray = (props) => {
  return (
    <div>
      <h1>Props Array Example</h1>
      <p>Name : {props.person_obj[0]}</p>
      <p>Age : {props.person_obj[1]}</p>
      <p>Gender : {props.person_obj[2]}</p>
    </div>
  );
};

export default PropsArray;
