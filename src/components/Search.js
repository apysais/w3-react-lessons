import React from 'react';
import { useData } from './DataContext';

function Search() {
    const { searchTerm, setSearchTerm } = useData();
    console.log('init search component');
    return (
        <>
            <p>Search</p>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </>
    );
}

export default Search;
