import React from "react";
import "./MenuPanel.scss";
export default function MenuPanel({ menuOpen }) {
  const menuStyle = menuOpen ? { display: "block" } : { display: "none" };
  return (
    <div className="menuPanel-nav" style={menuStyle}>
      <li>
        <a href="/shopping/clothings">Clothing</a>
      </li>
      <li>
        <a href="/shopping/shoes">Shoes</a>
      </li>
      <li>
        <a href="/shopping/bags">Bags</a>
      </li>
      <li>
        <a href="/shopping/watches">Watches</a>
      </li>
      <li>
        <a href="/shopping/accessories">Accessories</a>
      </li>
    </div>
  );
}
