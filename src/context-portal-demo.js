import React, { createContext, useContext, useState } from 'react';
import {createPortal} from "react-dom";
import { DataProvider } from './components/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <DataProvider>
           <>
                <h1>Context and Portal Demo</h1>
                {data}
           </>
        </DataProvider>
    </React.StrictMode>
);