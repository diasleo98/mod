import React, { createContext, Component, useState, useContext, useCallback, useEffect} from 'react';


 const DataContext = createContext();
 function DataContextProvider({children}){
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ filtered, setFiltered] = useState({});
        
    return(
        <DataContext.Provider value={{data, setData, loading, setLoading, filtered, setFiltered}}>
            {children}
        </DataContext.Provider>
    )
}
function useData(){
    const contextData = useContext(DataContext);
    return contextData;
}

export {useData,DataContextProvider};