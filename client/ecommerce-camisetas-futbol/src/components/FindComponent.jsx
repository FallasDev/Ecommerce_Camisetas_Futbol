import { useContext, useEffect, useState } from "react"
import FindInput from "../secondaryComponents/FindInput";
import "../styles/FindComponent.css"
import { context } from "../ContextApp";
import Lupa from "../secondaryComponents/Lupa";
import { Link } from "react-router-dom";

function FindComponent(){

    const { shirtData,setShirtData,isFinding } = useContext(context);
    const [ inputValue,setInputValue ] = useState("");
    const [ data,setData ] = useState("");
    

    useEffect(() => {
        fetch(`https://ecommerce-camisetas-futbol-ltiq.onrender.com/GoalThreads/getCamisas/${inputValue}`)
        .then(res => res.json())
        .then(dataJSON => {setShirtData(dataJSON); console.log(dataJSON)})
        console.log(isFinding)
    },[inputValue]);

    const handleInput = (ev) => {
        ev.preventDefault();
        setInputValue(ev.target.value);
    } 
    
    return (
        <div className={!isFinding ? "Find-component-flex" : "Find-component-grid"}>
            {(isFinding) && <FindInput onChange={handleInput}/>}
            <Lupa/>
            {isFinding && <ul className="list-search">
                {(shirtData.length > 0) && shirtData.map((item,index) => 
                        <li key={index}>
                            {item && item.LigaData && item.LigaData.Nombre ? (
                                <Link className="product-link" to={`/product-page/${item.LigaData.Nombre}`}>{item.LigaData.Nombre}</Link>
                            ) : (
                                item && item.Nombre ? <Link className="product-link" to={`/product-page/${item.Nombre}`}>{item.Nombre}</Link> : null
                            )}
                        </li>
                )}
            </ul> }
        </div>
    )
}

export default FindComponent;