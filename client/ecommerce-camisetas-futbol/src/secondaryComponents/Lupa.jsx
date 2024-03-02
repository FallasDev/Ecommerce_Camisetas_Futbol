import { useContext } from "react"
import { context } from "../ContextApp"
import lupa from "../assets/lupa.png"
import X from "../assets/x-black.webp";
import "../styles/FindComponent.css"

function Lupa(){

    const { isFinding,setIsFinding } = useContext(context);

    return (
        <button className={isFinding ? "x-button" : "lupa"} onClick={() => {setIsFinding(!isFinding)}}><img src={(!isFinding) ? lupa : X} alt="" /></button>
    )
}

export default Lupa;