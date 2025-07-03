import { useState } from "react";
import { LOGO_ICON } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
    // let btnName = "Login";
    const [btnName, SetbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo">
               <Link to="/">{LOGO_ICON} </Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li>{onlineStatus ? <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
<path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"></path>
</svg> : "🔴"}</li>
                    <li><Link to="/">Home </Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <li className="btn" onClick={()=>{
                    SetbtnName(btnName === "Login" ? "Logout" : "Login")
                    }}>{btnName}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;