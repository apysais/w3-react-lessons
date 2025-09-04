import React from 'react';
import { useData } from './DataContext';

const DataList = () => {
    const { data, filter, searchTerm, page, itemsPerPage } = useData();

    //https://javascript.info/array-methods#filter
    //https://www.w3schools.com/jsref/jsref_filter.asp

    const filtered = data
        .filter(item => filter === 'All' || item.category === filter)
        .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const paginated = filtered.slice(
        (page - 1) * itemsPerPage, 
        page * itemsPerPage
    );
    console.log(paginated);

    // calculate total pages based on filtered data
    // const totalPages = Math.ceil(filtered.length / itemsPerPage);
    // console.log('total pages: ' + totalPages);

    // const start_index = (page - 1) * itemsPerPage;
    // const end_index = start_index + itemsPerPage;
    // const paginated = filtered.slice(start_index, end_index);
    return (
        <ul>
            {/* {filtered.map(item => (
                <li key={item.id}>{item.name} - {item.category}</li>
            ))} */}

            {paginated.map(item => (
                <li key={item.id}>{item.name} - {item.category}</li>
            ))}
        </ul>
    );
}

export default DataList;
