import { createContext,useState } from "react";

export const context = createContext();

function ContextApp({children}){
    const [ isFinding, setIsFinding ] = useState(false);

    return (
        <context.Provider value={
            {
                isFinding,
                setIsFinding
            }
        }>
            {children }
        </context.Provider>
    )
}

export default ContextApp;