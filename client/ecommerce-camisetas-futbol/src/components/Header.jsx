import "../styles/Header.css";
import lupa from "../assets/lupa.png"
import carritoDeCompras from "../assets/carrito-de-compras.png"
import Logo from "../secondaryComponents/Logo";
import MoreMenu from "../secondaryComponents/MoreMenu";

function Header(){
    return (
        <header className={screen.width < 792 ? "header-main-mobile" : "header-main"}>
            <nav>
                <ul className="nav-ul">
                    <li><a href="">Hombre</a></li>
                    <li><a href="">Mujer</a></li>
                    <li><a href="">Niños</a></li>
                </ul>
            </nav>
            {screen.width < 792 && <MoreMenu/>}
            {screen.width > 792 && <Logo/>}
            <nav>
                <ul className="nav-ul">
                    <li><button className="lupa"><img src={lupa} alt="" /></button></li>
                    <li><button className="carito"><img src={carritoDeCompras} alt="" /></button></li>
                    <li><a href="">Iniciar Sesión</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;