import "../styles/Logo.css";

function Logo({className}){
    return (
        <h2 className={className || "header-h2"}>FutTeeStore</h2>
    )
}

export default Logo;