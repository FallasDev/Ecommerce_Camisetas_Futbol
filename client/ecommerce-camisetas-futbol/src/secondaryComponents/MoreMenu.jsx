import "../styles/MoreMenu.css";
import carritoDeCompras from "../assets/carrito-de-compras.png";
import MoreMenuIcon from "../assets/more-1.webp";
import XIcon from "../assets/x.webp";
import User from "../assets/user-interface.webp";
import { useState,useContext } from "react";
import Logo from "./Logo";
import FindComponent from "../components/FindComponent";
import { context } from "../ContextApp";

function MoreMenu(){

    const [ isChecked,setIsChecked ] = useState(false);
    const { isBuyCar,setIsBuyCar } = useContext(context)

    return (
        <section className="more-menu">
            <div className="more-menu-div-one">
                <div className="more-menu-icon">
                    <input type="checkbox" onChange={() => {setIsChecked(!isChecked)}}/>
                    <img src={!isChecked ? MoreMenuIcon : XIcon} alt="More Menu" />
                </div>
                <Logo className="header-h2-mobile"/>
            </div>
            {(isChecked) && <div className="more-menu-div-two">
                <ul className="nav-ul-mobile">
                    <li><a href="">Hombre</a></li>
                    <li><a href="">Mujer</a></li>
                    <li><a href="">Niños</a></li>
                </ul>
            </div>}
            <ul className="more-menu-ul">
                <FindComponent/>
                <li><button className="carito" onClick={() => setIsBuyCar(!isBuyCar)}><img src={carritoDeCompras} alt="" /></button> </li>
                <li><a className="user" href=""><img src={User} alt="" /></a></li>
            </ul>
        </section>
    )
}

export default MoreMenu;