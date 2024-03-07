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

    const { shirtData,orderDetails,isFinding } = useContext(context);
    const [ isFront,setIsFront ] = useState(true)
    const [ data,setData ] = useState(shirtData[0] || JSON.parse(localStorage.getItem("findData")))
    const [ modal,setModal ] = useState(false)

    const isAligue = () => {
        localStorage.setItem("findData",JSON.stringify(data))
        const dataLength = Object.values(data).length
        return dataLength != 3;
    }

    return (
        <article className="article-productDetail">
        {<Header/>}
        {(!isAligue()) ? <section className="section-productDetail">
            <div className="section-productDetail-divOne">
                <button onClick={() => setIsFront(!isFront)}>⇦</button>
                <img src={isFront ? data.Frente : data.Inversa} alt="" />
                <button onClick={() => setIsFront(!isFront)}>⇨</button>
            </div>
            <div className="section-productDetail-divTwo">
                <h2>Camiseta Authentic Primera Equipación {data.Nombre} 23/24</h2>
                <p>40$</p>
                <ShirtSizes/>
                <CustomShirt/>
                <button className="add-car" onClick={() => {
                    if(orderDetails.size != ""){
                        const completeDetails = {name: data.Nombre, src: data.Frente, stock: 1, price: 40,...orderDetails}
                        setLocalDataShirt([...localShirtData,completeDetails])
                        setModal(!modal)
                        setTimeout(() => { location.reload() },3000)
                    }
                }}>Añadir al carrito</button>
            </div>
            </section>
            : <LigueProducts products={Object.values(data)}/>    
        }
        {modal && <Modal src={data.Frente} close="X" content="Producto añadido al carrito de compras"/>}
        </article>
    )
}

export default ProductDetalil;