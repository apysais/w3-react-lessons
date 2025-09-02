You're describing a setup where you have multiple separate DOM elements (like <div id="search">, <div id="filter">, etc.) possibly rendered in different parts of the page, and you want each of them to be controlled by independent React components, but share the same data/state.

✅ Yes, this is possible in React, even if the components are rendered into different DOM nodes. You can achieve this using React Portals combined with shared state via a global store (like Context API or Zustand).

🧩 How to Do It: Overview
Create a global state using Context API or Zustand.
Render React components into specific DOM elements using ReactDOM.createPortal.
Each component (search, filter, paginate, list) reads/writes to the shared state.
✅ Example Using Context + Portals

1. Set up shared state with Context
// DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  return (
    <DataContext.Provider value={{ searchTerm, setSearchTerm, filter, setFilter, page, setPage, data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

2. Render components into specific DOM elements

// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { DataProvider } from './DataContext';
import Search from './Search';
import Filter from './Filter';
import Paginate from './Paginate';
import DataList from './DataList';

ReactDOM.render(
  <DataProvider>
    <>
      {ReactDOM.createPortal(<Search />, document.getElementById('search'))}
      {ReactDOM.createPortal(<Filter />, document.getElementById('filter'))}
      {ReactDOM.createPortal(<Paginate />, document.getElementById('paginate'))}
      {ReactDOM.createPortal(<DataList />, document.getElementById('list-data'))}
    </>
  </DataProvider>,
  document.getElementById('root') // This can be a hidden root or main container
);

3. Each component uses shared state
// Search.js
import React from 'react';
import { useData } from './DataContext';

function Search() {
  const { searchTerm, setSearchTerm } = useData();

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}

export default Search;

Repeat similarly for Filter, Paginate, and DataList.

🧠 Why This Works
Portals let you render React components into any DOM node.
Context ensures all components share the same state, no matter where they render.

Complete Demo

1. HTML File (e.g., index.html)

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>React Shared State with Portals</title>
</head>
<body>
  <div id="root"></div>

  <!-- Separate DOM containers -->
  <div id="search"></div>
  <div id="filter"></div>
  <div id="paginate"></div>
  <div id="list-data"></div>

  <script src="main.js"></script>
</body>
</html>

2. Context Setup (DataContext.js)
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [page, setPage] = useState(1);
  const [data] = useState([
    { id: 1, name: 'Apple', category: 'Fruit' },
    { id: 2, name: 'Carrot', category: 'Vegetable' },
    { id: 3, name: 'Banana', category: 'Fruit' },
    { id: 4, name: 'Broccoli', category: 'Vegetable' }
  ]);

  return (
    <DataContext.Provider value={{ searchTerm, setSearchTerm, filter, setFilter, page, setPage, data }}>
      {children}
    </DataContext.Provider>
  );
};

3. Components
Search.js

import React from 'react';
import { useData } from './DataContext';

function Search() {
  const { searchTerm, setSearchTerm } = useData();

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}

export default Search;

Filter.js

import React from 'react';
import { useData } from './DataContext';

function Filter() {
  const { filter, setFilter } = useData();

  return (
    <select value={filter} onChange={e => setFilter(e.target.value)}>
      <option value="All">All</option>
      <option value="Fruit">Fruit</option>
      <option value="Vegetable">Vegetable</option>
    </select>
  );
}

export default Filter;

Paginate.js

import React from 'react';
import { useData } from './DataContext';

function Paginate() {
  const { page, setPage } = useData();

  return (
    <div>
      <button onClick={() => setPage(prev => Math.max(prev - 1, 1))}>Previous</button>
      <span> Page {page} </span>
      <button onClick={() => setPage(prev => prev + 1)}>Next</button>
    </div>
  );
}

export default Paginate;

DataList.js

import React from 'react';
import { useData } from './DataContext';

function DataList() {
  const { data, searchTerm, filter, page } = useData();

  const filtered = data
    .filter(item => filter === 'All' || item.category === filter)
    .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const itemsPerPage = 2;
  const paginated = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <ul>
      {paginated.map(item => (
        <li key={item.id}>{item.name} ({item.category})</li>
      ))}
    </ul>
  );
}

export default DataList;

4. Main Entry (index.js)

import React from 'react';
import ReactDOM from 'react-dom';
import { DataProvider } from './DataContext';
import Search from './Search';
import Filter from './Filter';
import Paginate from './Paginate';
import DataList from './DataList';

ReactDOM.render(
  <DataProvider>
    <>
      {ReactDOM.createPortal(<Search />, document.getElementById('search'))}
      {ReactDOM.createPortal(<Filter />, document.getElementById('filter'))}
      {ReactDOM.createPortal(<Paginate />, document.getElementById('paginate'))}
      {ReactDOM.createPortal(<DataList />, document.getElementById('list-data'))}
    </>
  </DataProvider>,
  document.getElementById('root') // Can be hidden or used for other layout
);

Result
Each component is rendered into its own <div>.
All components share the same state via Context.
You can search, filter, paginate, and display data independently.