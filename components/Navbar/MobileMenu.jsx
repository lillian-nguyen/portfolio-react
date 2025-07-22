import React, {useState} from 'react';

const navItem = () => {
  return (
    
  )
}

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(

        <div className="mobileMenu">
        <button className="menuButton" onClick={() => setIsOpen(!isOpen)}>
          <img
            src={isOpen ? 'dist/xIcon.png' : 'dist/hamburgerMenu.png'}
            alt="Menu Toggle"
            className={`menuIcon ${isOpen ? 'rotate' : ''}`}
          />
        </button>
  
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul className="navUl">
            <li><a href="#about"><img src="dist/personIcon.png" alt="" /></a></li>
            <li><a href="#projects"><img src="dist/star.png" alt="" /></a></li>
            <li><a href="#contact"><img src="dist/mail.png" alt="" /></a></li>
          </ul>
        </nav>
      </div>


    )
}

export default MobileMenu;