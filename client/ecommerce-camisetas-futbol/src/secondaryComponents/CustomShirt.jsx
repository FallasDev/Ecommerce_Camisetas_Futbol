import { useContext, useEffect, useState } from "react"
import "../styles/ProductDetail.css"
import { context } from "../ContextApp";
import Counter from "./Counter";


function CustomShirt(){

    const [ patch,setPatch ] = useState({});
    const [ shirtName,setShirtName ] = useState("");  
    const [ shirtNumber, setShirtNumber ] = useState(0);
    const [ isShirtName,setIsShirtName ] = useState(false);
    const { orderDetails,setOrderDetails } = useContext(context);  

    useEffect(() => {
        setOrderDetails({...orderDetails,patch,shirtName,shirtNumber}) 
        console.log(orderDetails)
    },[patch,shirtName,shirtNumber])

    const handleInput = (ev) => {
        ev.preventDefault();
        setShirtName(ev.target.value)
    }

    return (
        <section className="section-customShirt">
            <div className="section-customShirt-divOne">
                <h4>Añade algún parche (+6$)</h4>
                <div className="patch-buttons">
                    <button  className={!patch.hasLigaPatch && !patch.hasChampionsPatch ? "patch-focus" : "patch"} onClick={() => setPatch({
                        hasLigaPatch: false,
                        hasChampionsPatch: false
                    })}>Ninguno</button>
                    <button className={patch.hasLigaPatch ? "patch-focus" : "patch"} onClick={() => setPatch({
                        hasLigaPatch: true,
                        hasChampionsPatch: false
                    })}>Liga</button>
                    <button className={patch.hasChampionsPatch ? "patch-focus" : "patch"} onClick={() => setPatch({
                        hasChampionsPatch: true,
                        hasLigaPatch: false,
                    })}>Champions League</button>
                </div>
            </div>
            <div className="section-customShirt-divTwo">
                <h4>Personaliza tu camiseta</h4>
                <div className="custom-buttons">
                    <button onClick={() => setIsShirtName(!isShirtName)} className="custom-button">Personalizar</button>
                    {isShirtName && 
                        <input placeholder="Nombre de la camiseta..." type="text" onChange={handleInput}/>
                    }
                    {isShirtName && 
                        <Counter sum={() => setShirtNumber(shirtNumber + 1)} number={shirtNumber} substract={() => setShirtNumber(shirtNumber - 1)}/>
                    }
                </div>
            </div>
        </section>
    )
}

export default CustomShirt