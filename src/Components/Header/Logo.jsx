import React from "react";

import logo from "./media/logo.svg";
import "./Logo.scss";

export default function Logo() {
  return (
    <div className="logo">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
}
