import React from 'react';
import ReactDOM from 'react-dom/client';
import Shape from './components/AppConditionals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// To show only one at a time, use:
//root.render(<Shape shape="circle" />);

// To show all at once, wrap them in a parent:
root.render(
  <>
    <Shape shape="circle" />
    <Shape shape="square" />
    <Shape shape="rectangle" />
  </>
);