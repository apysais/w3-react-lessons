import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoAppCallBack from './components/AppUseCallback';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <TodoAppCallBack />
    </React.StrictMode>
);