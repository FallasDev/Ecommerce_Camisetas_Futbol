import { useEffect,useState,useRef } from "react"
import "../styles/DivMainShirt.css";

function DivMainShirt(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://ecommerce-camisetas-futbol-ltiq.onrender.com/', {
        method: "GET",
        })
        .then(response => response.json())
        .then(dataJson => {setData(dataJson); console.log(dataJson)});
    }, []);

    return (
        <div className="article-div">
            {(data.length > 0) ? data.map((shirt,index) => 
                <figure className="shirt" key={index}>
                    <img src={shirt.Frente} alt="Equipo Camisa" />
                    <h4>{shirt.Nombre}</h4>
                    <span>$40</span>
                </figure>
            ) : <div className="loader"></div>}
        </div>
    )
}

export default DivMainShirt;