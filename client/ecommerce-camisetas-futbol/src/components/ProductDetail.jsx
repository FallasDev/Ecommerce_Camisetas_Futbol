import { useContext, useEffect, useState } from "react";
import { context } from "../ContextApp";
import LigueProducts from "../secondaryComponents/LigueProducts";
import Header from "./Header.jsx"
import "../styles/ProductDetail.css"
import ShirtSizes from "../secondaryComponents/ShirtSizes";
import CustomShirt from "../secondaryComponents/CustomShirt";
import { setLocalDataShirt,localShirtData } from "../ContextApp";
import Modal from "../styles/Modal";

function ProductDetalil(){

    const { shirtData,orderDetails,setShirtData } = useContext(context);
    const [ isFront,setIsFront ] = useState(true)
    const [ modal,setModal ] = useState(false)
    
    
    useEffect(() => {
        setShirtData(shirtData)
        console.log(shirtData)
    },[shirtData])

    const isLigue = () => {
        if(!Array.isArray(shirtData)){
            return Array.isArray(shirtData)
        }
        return shirtData.some((item) => item.hasOwnProperty("LigaData"))
    }

    return (
        <article className="article-productDetail">
        {<Header/>}
        {!isLigue() ? <section className="section-productDetail">
            <div className="section-productDetail-divOne">
                <button onClick={() => setIsFront(!isFront)}>⇦</button>
                <img src={isFront ? shirtData.Frente : shirtData.Inversa} alt="" />
                <button onClick={() => setIsFront(!isFront)}>⇨</button>
            </div>
            <div className="section-productDetail-divTwo">
                <h2>Camiseta Authentic Primera Equipación {shirtData.Nombre} 23/24</h2>
                <p>40$</p>
                <ShirtSizes/>
                <CustomShirt/>
                <button className="add-car" onClick={() => {
                    if(orderDetails.size != ""){
                        const completeDetails = {name: shirtData.Nombre, src: shirtData.Frente, stock: 1, price: 40,...orderDetails}
                        setLocalDataShirt([...localShirtData,completeDetails])
                        setModal(!modal)
                        setTimeout(() => { location.reload() },3000)
                    }
                }}>Añadir al carrito</button>
            </div>
            </section>
            : <LigueProducts products={Object.values(shirtData)}/>     
        }
        {modal && <Modal src={shirtData.Frente} close="X" content="Producto añadido al carrito de compras"/>}
        </article>
    )
}

export default ProductDetalil;