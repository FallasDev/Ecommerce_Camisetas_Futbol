import { useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/LigueProducts.css";
import { context } from "../ContextApp";

function LigueProducts({products}){

    const { shirtData,setShirtData,isFinding,setIsFinding } = useContext(context);

    useEffect(() => {
        console.log(Object.values(products[0]))
    },[])

    return (
        <div className="league-products">
            <h2>Resultados de busqueda</h2>
            <ul className="list-leagueTeams">
                {(products ) ? Object.values(products[0]).map((item,index) => 
                    {
                        return (item.hasOwnProperty("Frente")) && <li className="list-leagueTeams-li" key={index}>
                        <Link className="list-leagueTeams-Link" to={`/product-page/${item.Nombre}`} onClick={() => {setShirtData(item); setIsFinding(false)}}>
                            <img src={item.Frente} alt="Camiseta equipo de futbol" />
                            <h3>{item.Nombre}</h3>
                        </Link>
                        </li>
                    }
                    
                ): <h1>Wait</h1>}
            </ul>
        </div>
    )
}

export default LigueProducts;