import React from "react";
import { Link } from "react-router-dom";

import cart from "./media/cart.svg";
import person from "./media/person.svg";

import "./User.scss";

export default function User() {
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
    </div>
  );
}
