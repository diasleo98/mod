import {DataContextProvider} from './dataContext'

export default function AppProvider({children}){
    return (<DataContextProvider>
        {children}
    </DataContextProvider>    
    )
}