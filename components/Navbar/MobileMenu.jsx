import React, {useState} from 'react';

const NavItem = ({sectionRedirect, imgSrc, altText, specificNavSpan, navItemText, onClick}) => {
  return (
    <li>
      <div className="navLinkRow">
      <a href={sectionRedirect}><span className={`navItemLabel ${specificNavSpan}`} onClick={onClick}>{navItemText}</span></a>
      <a href={sectionRedirect} onClick={onClick}><img className="navIcon" src={imgSrc} alt={altText} /></a>
      </div>
    </li>
  )
}

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => {
      document.body.style.overflow = "auto";
      setIsOpen(false);
    }

    return(

        <div className="mobileMenu">
        <button className="menuButton" onClick={() => setIsOpen(!isOpen)}>
          <img
            src={isOpen ? 'public/xIcon.png' : 'public/hamburgerMenu.png'}
            alt="Menu Toggle"
            className={`menuIcon ${isOpen ? 'rotate' : ''}`}
          />
        </button>
  
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul className="navUl">
            <NavItem navItemText="About" sectionRedirect="#about" imgSrc="public/personIcon.png" altText="person icon" onClick={closeMenu}/>
            <NavItem navItemText="Projects" sectionRedirect="#projects" imgSrc="public/star.png" altText="star icon" specificNavSpan="projectSpan" onClick={closeMenu}/>
            <NavItem navItemText="Contact" sectionRedirect="#contact" imgSrc="public/mail.png" altText="envelope icon" specificNavSpan="contactSpan" onClick={closeMenu}/>
          </ul>
        </nav>
      </div>


    )
}

export default MobileMenu;