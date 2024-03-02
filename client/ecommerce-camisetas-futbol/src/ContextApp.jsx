import { createContext,useState } from "react";

export const context = createContext();

function ContextApp({children}){
    const [ isFinding, setIsFinding ] = useState(false);
    const [ shirtData,setShirtData ] = useState([]);
    const [ buyCar , setBuyCar ] = useState([]);

    return (
        <context.Provider value={
            {
                isFinding,
                setIsFinding,
                shirtData,
                setShirtData,
                buyCar,
                setBuyCar
            }
        }>
            {children }
        </context.Provider>
    )
}

export default ContextApp;