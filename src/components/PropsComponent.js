import React from 'react';

function PropsComOne(props) {
    return (
        <div>
            <h1>Props Component One</h1>
            <p>Name : {props.name}</p>
        </div>
    );
}

function PropsComTwo() {
    return (
        <div>
            <h1>Props Component Two</h1>
            <PropsComOne name="Props Two"></PropsComOne>
        </div>
    );
}

export default PropsComTwo;
