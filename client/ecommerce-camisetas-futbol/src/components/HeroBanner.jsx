import banner from "../assets/Camisetas-Banner.webp";
import ButtonOne from "../secondaryComponents/ButtonOne";
import "../styles/HeroBanner.css";

function HeroBanner(){
    return <section className={"HeroBanner"}>
        <img src={banner} loading="lazy" alt="imagen" />
        <div className="HeroBanner-div">
            <h1>Colección Temporada 23/24</h1>
            <p>Donde la pasión por el fútbol se viste con estilo: camisetas que inspiran cada jugada, cada gol.</p>
            <ButtonOne content="Ordenar ahora!"/>
        </div>
    </section>
}

export default HeroBanner;