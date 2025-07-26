import React, {useState} from 'react';

const NavItem = ({sectionRedirect, imgSrc, altText, specificNavSpan, navItemText}) => {
  return (
    <li>
      <div className="navLinkRow">
      <span className={`navItemLabel ${specificNavSpan}`}>{navItemText}</span>
      <a href={sectionRedirect}><img src={imgSrc} alt={altText} /></a>
      </div>
    </li>
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
            <NavItem navItemText="About" sectionRedirect="#about" imgSrc="dist/personIcon.png" altText="person icon"/>
            <NavItem navItemText="Projects" sectionRedirect="#projects" imgSrc="dist/star.png" altText="star icon" specificNavSpan="projectSpan"/>
            <NavItem navItemText="Contact" sectionRedirect="#contact" imgSrc="dist/mail.png" altText="envelope icon" specificNavSpan="contactSpan"/>
          </ul>
        </nav>
      </div>


    )
}

export default MobileMenu;