// MenuContext.js
import { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const openMenu = () => setIsMenuOpen(true);

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu, openMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

// Hook for easier use
export const useMenu = () => useContext(MenuContext);
