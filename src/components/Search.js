import React from 'react';
import { useData } from './DataContext';

function Search() {
    const { data, searchTerm, setSearchTerm } = useData();
    console.log('init search component');
    console.log(data);
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
