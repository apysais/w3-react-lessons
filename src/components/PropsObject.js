import React from 'react';

const PropsObject = (props) => {
  return (
    <div>
      <h1>Props Object Example</h1>
      <p>Name : {props.person_obj.name}</p>
      <p>Age : {props.person_obj.age}</p>
      <p>Gender : {props.person_obj.gender}</p>
    </div>
  );
};

export default PropsObject;
