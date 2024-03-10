import { useContext, useEffect, useState,useRef } from "react"
import FindInput from "../secondaryComponents/FindInput";
import "../styles/FindComponent.css"
import { context } from "../ContextApp";
import Lupa from "../secondaryComponents/Lupa";
import { Link } from "react-router-dom";

function FindComponent(){

    const { shirtData,setShirtData,isFinding,setIsFinding } = useContext(context);
    const [ inputValue,setInputValue ] = useState("");
    const [ speechInputValue,setSpeechInputValue ] = useState("");
    let [ contador,setContador ] = useState(1)
    const [isRecognizing, setIsRecognizing] = useState(false);
    const recognition = useRef(new webkitSpeechRecognition());

    useEffect(() => {
        console.log(inputValue)
        fetch(`https://ecommerce-camisetas-futbol-ltiq.onrender.com/GoalThreads/getCamisas/${inputValue}`)
        .then(res => res.json())
        .then(dataJSON => {setShirtData(dataJSON); console.log(dataJSON)})
    },[inputValue]);
    
    const buttonRef = useRef(null);
    useEffect(() => {
        const button = buttonRef.current;
        if (button) {
            button.addEventListener("mousedown", vozRecognition, true);
            button.addEventListener("mouseup", stopVozRecognition, true);
          }
      
          return () => {
            if (button) {
              button.removeEventListener("mousedown", vozRecognition, true);
              button.removeEventListener("mouseup", stopVozRecognition, true);
            }
          };
    },[])

    const handleInput = (ev) => {
        ev.preventDefault();
        setInputValue(ev.target.value);
    } 

    const vozRecognition = () => {
        if(!isRecognizing){
            setIsRecognizing()
            recognition.current.lang = 'es-ES'
            recognition.current.continues = true
            recognition.current.onresult = event => {
            for (const result of event.results) {
                console.log(result[0].transcript)
                setInputValue(result[0].transcript)
                }
            }
            recognition.current.start()
        }
    }

    const stopVozRecognition = () => {
        if(isRecognizing){
            console.log("Detener")
            setIsRecognizing(!isRecognizing)
            recognition.current.stop()
        }
    }
    
    return (
        <div className={!isFinding ? "Find-component-flex" : "Find-component-grid"}>
            {(isFinding) && <FindInput onChange={handleInput} ref={buttonRef}/>}
            <Lupa/>
            {isFinding && <ul className="list-search">
                {(shirtData.length > 0) && shirtData.map((item,index) => 
                        <li key={index}>
                            {item && item.LigaData && item.LigaData.Nombre ? (
                                <Link onClick={() => setIsFinding(false)} className="product-link" to={`/product-page/${item.LigaData.Nombre}`}>{item.LigaData.Nombre}</Link>
                            ) : (
                                item && item.Nombre ? <Link onClick={() => {setIsFinding(false); setShirtData(item)}}  className="product-link" to={`/product-page/${item.Nombre}`}>{item.Nombre}</Link> : null
                            )}
                        </li>
                )}
            </ul> }
        </div>
    )
}

export default FindComponent;