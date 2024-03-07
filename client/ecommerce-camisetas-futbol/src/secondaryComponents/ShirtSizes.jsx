import { useContext, useEffect, useState } from "react";
import "../styles/ProductDetail.css";
import { context } from "../ContextApp";

function ShirtSizes(){
    
    const [ size,setSize ] = useState("");
    const { orderDetails,setOrderDetails } = useContext(context);

    useEffect(() => {
        const newDetails = {...orderDetails,size}
        setOrderDetails(newDetails)
        console.log(newDetails)
    },[size])
    
    const shirtSizes = [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ];
    
    return (
        <section className="sizes-section">
            <h4>Seleccionar Talla</h4>
            <ul className="sizes-ul">
                {shirtSizes.map((item,index) => 
                    <li key={index}>
                        {console.log(item === size, item)}
                        <button onClick={() => setSize(item)} className={item === size ? "size-button-focus" : "size-button"}>{item}</button>
                    </li>
                )}
            </ul>
        </section>
    )
}

export default ShirtSizes