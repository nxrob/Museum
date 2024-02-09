import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
    const [searchData, setSearchData] = useState({
        museums: [],
        art: [],
        artists: []
    });

    const updateSearchData = (newData) => {
        setSearchData(newData);
    };

    return (
        <SearchContext.Provider value={{ searchData, updateSearchData }}>
            {children}
        </SearchContext.Provider>
    );
};
