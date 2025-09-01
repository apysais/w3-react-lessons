import React from 'react';
import ReactDOM from 'react-dom/client';
import AppSuspense from './components/AppSuspense';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppSuspense />
    </React.StrictMode>
);