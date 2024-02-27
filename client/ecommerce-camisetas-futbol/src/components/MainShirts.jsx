import "../styles/MainShirts.css";
import DivMainShirt from "../secondaryComponents/DivMainShirt.jsx";
import HeaderArticle from "../secondaryComponents/HeaderArticle.jsx";

function MainShirts(){
    return (
        <article className="article-mainShirts">
            <HeaderArticle title="Top Camisas" description="¡Camisetas de Fútbol 23/24! Siente la Emoción del Deporte con los Colores de tu Equipo."/>
            <DivMainShirt/>
            <hr />
        </article>
    )
}

export default MainShirts