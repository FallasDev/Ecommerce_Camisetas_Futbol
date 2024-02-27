import "../styles/ButtonOne.css"

function ButtonOne({onClick,content}){
    return (
        <button className="btn-1" onClick={onClick}>{content}</button>
    )
}

export default ButtonOne;