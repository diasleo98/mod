import React, { createContext, Component, useState, useContext, useCallback, useEffect} from 'react';


 const DataContext = createContext();
 function DataContextProvider({children}){
    const [ data, setData ] = useState([{id:1,terminalName:"oi"}]);
    
        
       
    return(
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    )
}
function useData(){
    const contextData = useContext(DataContext);
    return contextData;
}
export {useData,DataContextProvider};