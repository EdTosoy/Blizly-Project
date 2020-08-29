import React from "react";

import "./Search.scss";

export default function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Search" />
      <button type="submit">
        <ion-icon name="search-outline"></ion-icon>
      </button>
    </div>
  );
}
