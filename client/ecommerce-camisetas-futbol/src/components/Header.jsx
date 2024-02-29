import "../styles/Header.css";
import lupa from "../assets/lupa.png"
import carritoDeCompras from "../assets/carrito-de-compras.png"
import Logo from "../secondaryComponents/Logo";
import MoreMenu from "../secondaryComponents/MoreMenu";
import FindComponent from "./FindComponent";
import { useContext } from "react";
import { context } from "../ContextApp";

function Header(){

    const { isFinding } = useContext(context)

    return (
        <header className={screen.width < 792 ? "header-main-mobile" : "header-main"}>
            {!isFinding && <nav>
                <ul className="nav-ul">
                    <li><a href="">Hombre</a></li>
                    <li><a href="">Mujer</a></li>
                    <li><a href="">Niños</a></li>
                </ul>
            </nav>
            }
            {screen.width < 792 && <MoreMenu/>}
            {!isFinding &&screen.width > 792 && <Logo/>}
            
            {!isFinding ? <nav>
                <ul className="nav-ul">
                    <FindComponent/>
                    <li><button className="carito"><img src={carritoDeCompras} alt="" /></button></li>
                    <li><a href="">Iniciar Sesión</a></li>
                </ul>
            </nav> : <FindComponent/>} 
        </header>
    )
}

export default Header;