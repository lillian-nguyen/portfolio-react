import {React, useEffect, useState} from "react";
import MobileMenu from "../Navbar/MobileMenu";

const DesktopMenu = () => {
    return(
        <ul className="desktopLinks">
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
        </ul>
    )
}

const Header = () => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);
  
    const updateMedia = () => {
      setDesktop(window.innerWidth > 675);
    };
  
    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    });
  
    return (
        <header>
            <a href="/">
                <img src={isDesktop? `/Logo_dark.png` : `/logo-clear.png`} className="homeLogo" alt="logo" />
            </a>
            {isDesktop? (
                <DesktopMenu/>) : (<MobileMenu/>)}
        </header>
    );
};

export default Header; 