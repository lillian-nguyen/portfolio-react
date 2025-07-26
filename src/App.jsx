import {React, useState} from 'react';
import Header from '../components/Header/Header';
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
            <Header/>
            <main>
            <Hero />
            <About />
            <Projects />
            <Contact/>
            </main>
        </>
    )
}

export default App;

