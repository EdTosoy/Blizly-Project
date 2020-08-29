import React from "react";

import "./CategoryNav.scss";

export default function CategoryNav() {
  return (
    <ul className="category-nav">
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
    </ul>
  );
}
