import { useContext,useEffect, useState } from "react";
import { context, localShirtData } from "../ContextApp";
import X from "../assets/x-black.webp";
import ProductBuyCar from "../secondaryComponents/ProductBuyCar";
import "../styles/buyCar.css";
import { setLocalPrice,localPrice } from "../ContextApp";

function BuyCarComponent(){

    const { changePrice,setIsBuyCar,isBuyCar } = useContext(context);
    const [ price,setPrice ] = useState(localPrice)

    useEffect(() => {
        priceChange()
        console.log(localShirtData)
    },[changePrice])

    const priceChange = () => {
        let finalPrice = 0;
        let patchChampionsAmount = 0;
        let patchLigaAmount = 0
        if(changePrice.length > 0){
            changePrice.map((item) => {
               patchChampionsAmount = item.patch.hasLigaPatch ? 6 : 0
               patchLigaAmount = item.patch.hasChampionsPatch ? 6 : 0
               finalPrice += (item.price * item.stock) + patchChampionsAmount + patchLigaAmount
               setPrice(finalPrice);
               setLocalPrice(finalPrice);
           })
        } else {
            setPrice(0)
        }
    }

    return (    
        <div className="buy-car">
            <header className="buy-car-header">
                <h3>Tu carrito ({changePrice.length})</h3>
                <button onClick={() => {
                    setIsBuyCar(!isBuyCar)
                    location.reload()
                }}><img src={X} alt="" /></button>
            </header>
            <h3 className="buy-car-price">Subtotal: ${price}</h3>
            <button className="buy-car-button">Pagar Pedido</button>
            <ProductBuyCar/>
        </div>
    )   
}

export default BuyCarComponent;