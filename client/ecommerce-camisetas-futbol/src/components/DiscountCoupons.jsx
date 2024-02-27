import Banner from "../assets/HR3796_HM1.avif";
import Button from "../secondaryComponents/ButtonOne";
import HeaderArticle from "../secondaryComponents/HeaderArticle";
import "../styles/DiscountCoupons.css";

function DiscountCoupons(){
    return (
        <article className="DiscountCoupons-article">
            <img src={Banner} alt="" />
            <div>
                <HeaderArticle title="Obtén cupones de descuento" description="Puedes obtener cupones de descuento si logras demostrar tu conocimiento futbolistico a través de un pequeño quiz, para la compra de tu proxima camiseta."/>
                <Button onClick={() => {}} content="Pulsa aqui!"/>
            </div>
        </article>
    )
}

export default DiscountCoupons;