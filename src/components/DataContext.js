import React, {createContext, useContext, useState, useEffect, useRef} from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [itemsPerPage] = useState(3);
    const [totalPages, setTotalPages] = useState(1);
    const prevPage = useRef();

    // sample data
    // id, name, category
    // category: Fruit, Vegetable
    // normally this data would come from an API or database
    // but for this example, we'll hardcode it
    // you can add more items to test pagination
    // you can also change itemsPerPage to see how pagination changes
    // make sure to update totalPages accordingly
    // totalPages = Math.ceil(data.length / itemsPerPage)
    // and update it whenever data or itemsPerPage changes
    // useEffect(() => {
    //     setTotalPages(Math.ceil(data.length / itemsPerPage));
    // }, [data, itemsPerPage]);

    const data_content  = [
        { id: 1, name: 'Apple', category: 'Fruit' },
        { id: 2, name: 'Carrot', category: 'Vegetable' },
        { id: 3, name: 'Banana', category: 'Fruit' },
        { id: 4, name: 'Broccoli', category: 'Vegetable' },
        { id: 5, name: 'Strawberry', category: 'Fruit' },
        { id: 6, name: 'Beans', category: 'Vegetable' },
        { id: 7, name: 'Durian', category: 'Fruit' },
        { id: 8, name: 'Eggplant', category: 'Vegetable' }
    ];

    useEffect(() => {
        // set the data
        const total_pages = Math.ceil(data_content.length / itemsPerPage);
        setTotalPages(total_pages);
        setData(data_content);
        prevPage.current = page;
    }, []);

    return (
        <DataContext.Provider 
            value={{
                searchTerm, 
                setSearchTerm, 
                filter, 
                setFilter, 
                page, 
                setPage, 
                itemsPerPage, 
                data, 
                totalPages,
                prevPage
             }}>
            {children}
        </DataContext.Provider>
    );
}