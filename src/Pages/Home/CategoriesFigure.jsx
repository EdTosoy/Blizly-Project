import React from "react";

import "./CategoriesFigure.scss";

export default function CategoriesFigure() {
  return (
    <figure className="categories">
      <a href="/shopping/clothings" className="clothings">
        <div className="description">
          <h2>Mens Clothing</h2>
          <p>Your comfort is first and foremost.</p>
        </div>
      </a>
      <a href="/shopping/accessories" className="accessories">
        <div className="description">
          <h2>40% OFF WATCHES</h2>
          <p>no min.spend, selected styles only, Ends September 12.</p>
        </div>
      </a>
      <a href="/shopping/shoes" className="shoes">
        <div className="description">
          <h2>Footware</h2>
          <p>footware that never fail your styles.</p>
        </div>
      </a>
      <a href="/shopping/bags" className="bags">
        <div className="description">
          <h2>Backpack</h2>
          <p>till the next adventure.</p>
        </div>
      </a>
    </figure>
  );
}
