import React from 'react';
import Hero from '/components/Hero/Hero.jsx'
import MobileMenu from '../components/Navbar/MobileMenu';
import { About } from '../components/About/About';
import { Projects } from '../components/Projects/Projects';

const App = () => {
    return(
        <>
            <Hero />
            {/* <MobileMenu/> */}
            <About />
            <Projects />
        </>
    )
}

export default App;

