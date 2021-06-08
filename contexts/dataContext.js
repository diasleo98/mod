import React, { createContext, Component, useState, useContext, useCallback} from 'react';

 const DataContext = createContext();
 function DataContextProvider({children}){
     const [ data, setData ] = useState([
        { id:1, name: "Terminal da Adelaide", city: "curitiba", code: "12", priority: "HIGH", country:"Brasil", state:"Parana", region:"GT", extra: "escondido"},
        { id:2, name: "Pipeline do Léo", city: "curitiba", code: "7", priority: "LOW", country:"EUA", state:"Parana", region:"GT" },
        { id:3, name: "Site de Dallas", city: "curitiba", code: "657", priority: "MID", country:"IT", state:"Parana", region:"GT" }
     ]);
    //const [globalData, changeData] = useState([]);
    // var data = {
    //     first : 1,
    //     second : 2,
    //     changeData : dat => {
    //         first = dat
    //     }
    // }
    // const teste = useCallback(() => {}, [data])
    // useState(() => {}, [data])
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