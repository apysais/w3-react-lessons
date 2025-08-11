import React from 'react';

function Circle()
{
    return 'Circle';
}

function Square()
{
    return 'Square';
}

function Rectangle()
{
    return 'Rectangle';
}

function Shape(props) {
    const shape = props.shape;
    let ret_shape;
    
    if(shape == 'circle') {
        ret_shape = <Circle />;
    }
    if(shape == 'square') {
        ret_shape = <Circle />;
    }
    if(shape == 'rectangle'){
        ret_shape = <Rectangle />;
    }
    return (
        <div>
           <p>Shape : {ret_shape} </p>
        </div>
    );
}

export default Shape;