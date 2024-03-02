import "../styles/Header.css";
import carritoDeCompras from "../assets/carrito-de-compras.png"
import Logo from "../secondaryComponents/Logo";
import MoreMenu from "../secondaryComponents/MoreMenu";
import FindComponent from "./FindComponent";
import { useContext } from "react";
import { context } from "../ContextApp";
import Lupa from "../secondaryComponents/Lupa";

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
            {screen.width < 792 && !isFinding && <MoreMenu/>}
            {!isFinding && screen.width > 792 && <Logo/>}
            
            {!isFinding ? <nav>
                <ul className="nav-ul">
                    <Lupa/>
                    <li><button className="carito"><img src={carritoDeCompras} alt="" /></button></li>
                    <li><a href="">Iniciar Sesión</a></li>
                </ul>
            </nav> : <FindComponent/>} 
        </header>
    )
}

export default Header;