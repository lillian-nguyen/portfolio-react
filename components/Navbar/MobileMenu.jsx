import React from 'react';
import Line from '../Line';
import Square from '../Square';
import Button from '../Button';

const MobileMenu = () => {
    return(
        <div className="fixed inset-0 bg-[#445A29] flex flex-col justify-center items-center">
            <Button
            variant = 'close'
            />
            <div className="flex flex-col items-center mobile-links">
                <a>HOME</a>
                <a>ABOUT</a>
                <a>PROJECTS</a>
                <a>CONTACT</a>
            </div>
            <Line className="line1"/>
            <Line className="line2"/>
            <Square/>
            <img src="/flowerbg-removed.png" className="flowers"></img>
            <h3 className="mobile-initials">LN</h3>
        </div>
    )
}

export default MobileMenu;