import "../styles/HeaderArticle.css";

function HeaderArticle({title,description}){
    return (
    <header className="article-mainShirts-header">
        <h3>{title}</h3>
        <p>{description}</p>
    </header>
    )
}

export default HeaderArticle;