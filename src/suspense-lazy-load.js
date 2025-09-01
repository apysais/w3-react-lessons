import React from 'react';
import ReactDOM from 'react-dom/client';
import AppCarLazyLoad from './components/AppSuspenseLazy';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppCarLazyLoad />
    </React.StrictMode>
);