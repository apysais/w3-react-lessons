import React from 'react';
import { useData } from './DataContext';

const DataList = () => {
    const { data, filter } = useData();

    //https://javascript.info/array-methods#filter
    //https://www.w3schools.com/jsref/jsref_filter.asp
    
    const filtered = data
        .filter(item => filter === 'All' || item.category === filter);
        // .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <ul>
            {filtered.map(item => (
                <li key={item.id}>{item.name} - {item.category}</li>
            ))}
        </ul>
    );
}

export default DataList;
