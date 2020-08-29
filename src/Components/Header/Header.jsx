import React from "react";

import "./Header.scss";
import Logo from "./Logo";
import CategoryNav from "./CategoryNav";
import Search from "./Search";
import User from "./User";

export default function Header() {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <CategoryNav />
        <Search />
        <User />
      </div>
    </header>
  );
}
