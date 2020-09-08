import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../../ShopContext/menuContext";
import cart from "./media/cart.svg";
import person from "./media/person.svg";

import "./User.scss";
import MenuPanel from "./MenuPanel";

export default function User() {
  const [menuOpen, setMenuOpen] = useContext(MenuContext);
  const handleClick = () => {
    console.log(menuOpen);
    setMenuOpen((preValue) => !preValue);
  };

  return (
    <div className="user">
      <Link to="/cart">
        <div className="cart">
          <img src={cart} alt="cart" />
        </div>
      </Link>
      <Link to="/auth">
        <div className="person">
          <img src={person} alt="person" />
        </div>
      </Link>
      <div onClick={handleClick} className="menu">
        <ion-icon name="grid-outline"></ion-icon>
        <MenuPanel menuOpen={menuOpen} />
      </div>
    </div>
  );
}
