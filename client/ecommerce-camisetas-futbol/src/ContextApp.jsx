import { createContext,useState } from "react";


export const context = createContext();

export const setLocalDataShirt = (newData) => {
    localStorage.setItem("shirtData",JSON.stringify(newData))
}
export const localShirtData = JSON.parse(localStorage.getItem("shirtData")) || []

export const setLocalPrice = (newData) => {
    localStorage.setItem("price",JSON.stringify(newData))
}
export const localPrice = JSON.parse(localStorage.getItem("price")) || []


function ContextApp({children}){
    const [ isFinding, setIsFinding ] = useState(false);
    const [ isBuyCar, setIsBuyCar ] = useState(false);
    const [ changePrice,setChangePrice ] = useState([]);
    const [ shirtData,setShirtData ] = useState({});
    const [ orderDetails,setOrderDetails ] = useState({});
    const [ find,setFind ] = useState("");

    return (
        <context.Provider value={
            {
                isFinding,
                setIsFinding,
                isBuyCar,
                setIsBuyCar,
                changePrice,
                setChangePrice,
                shirtData,
                setShirtData,
                setOrderDetails,
                orderDetails,
                find,
                setFind
            }
        }>
            {children }
        </context.Provider>
    )
}

export default ContextApp;