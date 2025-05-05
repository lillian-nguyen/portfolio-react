import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMobileMenu = () => setMenuOpen(!menuOpen)

    return(
        <nav>
            {/* desktop menu */}
            <div className="hidden:md">
                <DesktopMenu/>
            </div>

            {/* hamburger menu (mobile) */}
            <div className="md:hidden">
                <HamburgerMenu variant={menuOpen ? "close" : "hamburger"} onClick={toggleMobileMenu}/>
            </div>

            {/* mobile links */}
            {menuOpen && (
                <>
                    <div className="absolute top-12 left-0 w-full h-screen bg-[#fef3c7] p-4 z-50"></div>
                    
                    <div className="md:hidden">
                    <MobileMenu />
                    </div>
                </>
            )}
        </nav>
    )
}

export default Navbar; 