import React. {createContext, useContext, useState, useEffect} from "react";
import axios from "axios";

const AppWPDataContext = createContext();

export const AppWPDataProvider = ({children}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    useEffect(() => {
        axios.get("https://example.com/wp-json/wp/v2/posts")
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return (
        <AppWPDataContext.Provider value={{data, error, loading}}>
            {children}
        </AppWPDataContext.Provider>
    );
}