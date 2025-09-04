import React, {createContext, useContext, useState, useEffect} from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    
    const data_content  = [
        { id: 1, name: 'Apple', category: 'Fruit' },
        { id: 2, name: 'Carrot', category: 'Vegetable' },
        { id: 3, name: 'Banana', category: 'Fruit' },
        { id: 4, name: 'Broccoli', category: 'Vegetable' }
    ];

    useEffect(() => {
        // set the data
        setData(data_content);
    }, []);

    return (
        <DataContext.Provider value={{searchTerm, setSearchTerm, filter, setFilter, page, setPage, data}}>
            {children}
        </DataContext.Provider>
    );
}