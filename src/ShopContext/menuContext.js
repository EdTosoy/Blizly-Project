import React, { useState, createContext } from "react";
export const MenuContext = createContext();
export const MenuProvider = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <MenuContext.Provider value={[menuOpen, setMenuOpen]}>
      {props.children}
    </MenuContext.Provider>
  );
};
