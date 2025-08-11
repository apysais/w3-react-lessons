import React from 'react';

const SingleJSX = () => <h1>Single JSX with expression 1 + 1 = {1 + 1}</h1>
const LargeBlockHTML = (
    <div>
        <ul>
            <li>Bananas</li>
            <li>Apples</li>
            <li>Durians</li>
        </ul>
    </div>
);
const MyComponent = (
    <>
        <SingleJSX />
        {LargeBlockHTML}
    </>
);
export {SingleJSX, LargeBlockHTML, MyComponent};