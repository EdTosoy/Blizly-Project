import React from "react";
import { NavLink } from "react-router-dom";
import "./LeftNav.scss";
export default function LeftNav() {
  return (
    <div className="left-nav">
      <h2>Mens Categories</h2>
      <li>
        <NavLink to="/shopping/clothings" activeClassName="selected">
          Clothing
        </NavLink>
      </li>

      <li>
        <NavLink to="/shopping/shoes" activeClassName="selected">
          Shoes
        </NavLink>
      </li>

      <li>
        <NavLink to="/shopping/bags" activeClassName="selected">
          Bags
        </NavLink>
      </li>
      <li>
        <NavLink to="/shopping/watches" activeClassName="selected">
          Watches
        </NavLink>
      </li>
      <li>
        <NavLink to="/shopping/accessories" activeClassName="selected">
          Accessories
        </NavLink>
      </li>
    </div>
  );
}
