import React, {createContext, useContext, useState} from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');

    return (
        <DataContext.Provider value={{searchTerm, setSearchTerm, filter, setFilter}}>
            {children}
        </DataContext.Provider>
    );
}