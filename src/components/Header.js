import { useState } from "react";
import { LOGO_ICON } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "url:../images/logo2.png"

const Header = () =>{
    // let btnName = "Login";
    const [btnName, SetbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="header-logo">
                <div>
                <img className="header-img" width={"200px"} height={"200px"} src={logo} />
                </div>
                <div className="header-text">
               <Link className="logo" to="/">Bharat Legal Services</Link>
                <span className="logo-text">Advocate Gurinder Singh Chandel(M.A., LL.B, CHR)</span>
                </div>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home </Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;