import {React, useState} from 'react';
import Hero from '/components/Hero/Hero.jsx'
import MobileMenu from '../components/Navbar/MobileMenu';
import { About } from '../components/About/About';
import { Projects } from '../components/Projects/Projects';
import { Contact } from '../components/Contact/Contact';

const App = () => {
    return(
        <>
            <Hero />
            {/* <MobileMenu/> */}
            <About />
            <Projects />
            <Contact/>
        </>
    )
}

export default App;

