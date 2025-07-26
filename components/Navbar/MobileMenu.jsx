import React, {useState, useEffect} from 'react';

const NavItem = ({sectionRedirect, imgSrc, altText, specificNavSpan, navItemText, onClick}) => {
  return (
    <li>
      <div className="navLinkRow">
      <span className={`navItemLabel ${specificNavSpan}`}>{navItemText}</span>
      <a href={sectionRedirect} onClick={onClick}><img className="navIcon" src={imgSrc} alt={altText} /></a>
      </div>
    </li>
  )
}

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    // const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => {
      document.body.style.overflow = "auto";
      setIsOpen(false);
    }

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
            <NavItem navItemText="About" sectionRedirect="#about" imgSrc="dist/personIcon.png" altText="person icon" onClick={closeMenu}/>
            <NavItem navItemText="Projects" sectionRedirect="#projects" imgSrc="dist/star.png" altText="star icon" specificNavSpan="projectSpan" onClick={closeMenu}/>
            <NavItem navItemText="Contact" sectionRedirect="#contact" imgSrc="dist/mail.png" altText="envelope icon" specificNavSpan="contactSpan" onClick={closeMenu}/>
          </ul>
        </nav>
      </div>


    )
}

export default MobileMenu;