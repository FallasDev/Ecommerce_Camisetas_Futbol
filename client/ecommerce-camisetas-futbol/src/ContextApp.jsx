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
    // localStorage.setItem("shirtData",JSON.stringify(
    //     [
    //         {
    //             name: "Camiseta Real Madrid 23/24",
    //             price: 40,
    //             src: "https://firebasestorage.googleapis.com/v0/b/eccomerce-1ddf8.appspot.com/o/La%20Liga%2FRMCFMZ0127_01_952e1722-868a-4d90-9a92-a80d3a23fbc8_500x480.webp?alt=media&token=2e8c1a9c-a3a5-4761-a66e-619d74441517",
    //             stock: 1,
    //             hasLigaPatch: false,
    //             hasChampionsPatch: false,
    //             showing: true
    //         },
    //         {
    //             name: "Camiseta Barcelona 23/24",
    //             price: 40,
    //             src: "https://firebasestorage.googleapis.com/v0/b/eccomerce-1ddf8.appspot.com/o/La%20Liga%2F00199455128597____17__1200x1200.avif?alt=media&token=49627e16-23b9-4b1c-a168-10e4b909883b",
    //             stock: 1,
    //             hasLigaPatch: false,
    //             hasChampionsPatch: false,
    //             showing: true
    //         },
    //         {
    //             name: "Camiseta Chelsea 23/24",
    //             price: 40,
    //             src: "https://firebasestorage.googleapis.com/v0/b/eccomerce-1ddf8.appspot.com/o/Premier%2F00199455325045____11__1200x1200.avif?alt=media&token=8ca27cdb-0c3c-4e57-ad80-137d52c973a4",
    //             stock: 1,
    //             hasLigaPatch: false,
    //             hasChampionsPatch: false,
    //             showing: true
    //         }
    //     ]
    // ))


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