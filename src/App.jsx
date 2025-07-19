import {React, useState} from 'react';
import Hero from '/components/Hero/Hero.jsx'
import MobileMenu from '../components/Navbar/MobileMenu';
import { About } from '../components/About/About';
import { Projects } from '../components/Projects/Projects';
import { Contact } from '../components/Contact/Contact';
// import Button from '../components/Button';
import { MenuProvider, useMenu } from '../components/Navbar/MenuContext';

const App = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return(
        <MenuProvider>
            <MainLayout />
        </MenuProvider>
    )
}

const MainLayout = () => {
    const { isMenuOpen, toggleMenu } = useMenu();;
    return (
        <>
        <MobileMenu/>
           {/* Floating Menu Button (visible on all pages) */}
           {/* <Button
           variant={isMenuOpen ? 'close' : 'hamburger'}
           onClick={toggleMenu}
           className="fixed top-4 right-4 z-50"
       /> */}

       {/* Mobile menu rendered conditionally */}
       {/* {isMenuOpen && <MobileMenu onClose={toggleMenu} />} */}
       <Hero />
       <About />
       <Projects />
       <Contact/>
       </>
    )
}

export default App;

