import { Link } from "react-router-dom";
import "../styles/Logo.css";

function Logo({className}){
    return (
       <Link to="/" className="Logo-Link"><h2 className={className || "header-h2"}>FutTeeStore</h2></Link>
    )
}

export default Logo;