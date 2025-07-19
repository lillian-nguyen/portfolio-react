import React, {useState} from 'react';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        // fixed inset-0 bg-[#445A29] flex flex-col justify-center items-center
        // <div className="mainButton">
        //     <button>
        //         <img src="dist/hamburgerMenu.png" 
        //         className="hamburgerMenu" alt="" />
        //     </button>
        // </div>

        <div className="mobileMenu">
        <button className="menuButton" onClick={() => setIsOpen(!isOpen)}>
          <img
            src={isOpen ? 'dist/xIcon.png' : 'dist/hamburgerMenu.png'}
            alt="Menu Toggle"
            className={`menuIcon ${isOpen ? 'rotate' : ''}`}
          />
        </button>
  
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home"><img src="dist/homeIcon.png" alt="" /></a></li>
            <li><a href="#about"><img src="dist/personIcon.png" alt="" /></a></li>
          </ul>
        </nav>
      </div>


    )
}

export default MobileMenu;