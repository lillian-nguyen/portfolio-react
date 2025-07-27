import React from "react";
import MobileMenu from "../Navbar/MobileMenu";

const Header = () => {
    return(
        <header>
            <a href="/">
                <img src="public/logo-clear1.png" className="homeLogo" alt="logo" />
            </a>
            <MobileMenu/>
        </header>
    )
    
}

export default Header; 