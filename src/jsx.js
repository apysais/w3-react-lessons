import React from 'react';
import ReactDOM from 'react-dom/client';
import {SingleJSX, LargeBlockHTML, MyComponent} from './components/AppJSX';

const root = ReactDOM.createRoot(document.getElementById('single-jsx'));
const largeBlock = ReactDOM.createRoot(document.getElementById('large-block'));
const MyComponentRoot = ReactDOM.createRoot(document.getElementById('my-component'));

root.render(<SingleJSX />);
largeBlock.render(LargeBlockHTML);
MyComponentRoot.render(MyComponent);