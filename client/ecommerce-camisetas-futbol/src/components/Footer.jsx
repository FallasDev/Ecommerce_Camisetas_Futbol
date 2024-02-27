import Logo from "../secondaryComponents/Logo";
import "../styles/Footer.css";

function Footer(){
    return (
        <footer className="footer-main">
            <section className="footer-main-section-one">
                <Logo className="footer-logo"/>
                <p>El mejor sitio para comprar tus camisetas en linea</p>
            </section>
            <section className="footer-main-section-two">
                <ul>
                    <h4>Ligas</h4>
                    <li><a href="">Premier League</a></li>
                    <li><a href="">La Liga</a></li>
                    <li><a href="">Bundesliga</a></li>
                    <li><a href="">Serie A</a></li>
                </ul>
                <ul>
                    <h4>Redes sociales</h4>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Facebook</a></li>
                    <li><a href=""> Youtube</a></li>
                    <li><a href="">X</a></li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer