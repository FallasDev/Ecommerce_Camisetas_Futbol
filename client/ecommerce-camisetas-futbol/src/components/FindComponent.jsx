import { useContext, useEffect, useState } from "react"
import lupa from "../assets/lupa.png";
import FindInput from "../secondaryComponents/FindInput";
import "../styles/FindComponent.css"
import X from "../assets/x-black.webp";
import { context } from "../ContextApp";

function FindComponent(){

    const { isFinding,setIsFinding } = useContext(context);
    const [ inputValue,setInputValue ] = useState("");
    const [ data,setData ] = useState("");
    

    useEffect(() => {
        fetch(`https://ecommerce-camisetas-futbol-ltiq.onrender.com/GoalThreads/Equipos/${inputValue}`)
        .then(res => res.json())
        .then(dataJSON => {setData(dataJSON); console.log(dataJSON)})
    },[inputValue]);

    const handleInput = (ev) => {
        ev.preventDefault();
        setInputValue(ev.target.value);
    } 
    
    return (
        <div className="Find-component">
            {(isFinding) && <FindInput onChange={handleInput}/>}
            <li><button className="lupa" onClick={() => {setIsFinding(!isFinding)}}><img src={(!isFinding) ? lupa : X} alt="" /></button></li>
                {(data.length > 0) && data.map((item,index) => 
                    <ul>
                        <li>{item.LigaNombre}</li>
                    </ul>    
                )}
        </div>
    )
}

export default FindComponent;