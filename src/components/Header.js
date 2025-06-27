import { LOGO_ICON } from "../utils/constants";

const Header = () =>{
    
    return (
        <div className="header">
            <div className="logo">
                {LOGO_ICON}
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;