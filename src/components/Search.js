import React from 'react';
import { useData } from './DataContext';

function Search() {
    const { data, searchTerm, setSearchTerm, setPage, page, prevPage } = useData();
    console.log('init search component');
    console.log(data);
    
    const updateSearchTerm = (term) => {
        setSearchTerm(term);
        
        if(page > 1) {
            setPage(1);
        }

        if(term === '') {
            console.log('reset page to ' + prevPage.current);
            setPage(prevPage.current);
        }
        console.log('current page in search: ' + page);
        console.log('previous page in search: ' + prevPage.current);
    }

    return (
        <>
            <p>Search</p>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => updateSearchTerm(e.target.value)}
            />
        </>
    );
}

export default Search;
