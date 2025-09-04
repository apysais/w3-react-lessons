import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import {createPortal} from "react-dom";
import { DataProvider } from './components/DataContext';
import Search from './components/Search';
import Filter from './components/Filter';
import DataList from './components/DataList';
import Paginate from './components/Paginate';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <DataProvider>
        <>
            {createPortal(<Search />, document.getElementById('search'))}
            {createPortal(<Filter />, document.getElementById('filter'))}
            {createPortal(<DataList />, document.getElementById('data-list'))}
            {createPortal(<Paginate />, document.getElementById('paginate'))}
        </>
    </DataProvider>
);
