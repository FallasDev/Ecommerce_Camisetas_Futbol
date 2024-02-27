import "../styles/MoreMenu.css";
import lupa from "../assets/lupa.png";
import carritoDeCompras from "../assets/carrito-de-compras.png";
import MoreMenuIcon from "../assets/more-1.webp";
import XIcon from "../assets/x.webp";
import User from "../assets/user-interface.webp";
import { useState } from "react";
import Logo from "./Logo";

function MoreMenu(){

    const [ isChecked,setIsChecked ] = useState(false)

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
                <li><button className="lupa"><img src={lupa} alt="" /></button></li>
                <li><button className="carito"><img src={carritoDeCompras} alt="" /></button> </li>
                <li><a className="user" href=""><img src={User} alt="" /></a></li>
            </ul>
        </section>
    )
}

export default MoreMenu;