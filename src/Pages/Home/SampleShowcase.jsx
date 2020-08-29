import React from "react";

import LeftNav from "../../Components/ShowCase/LeftNav";
import productData from "../../Components/ShowCase/productdata.json";

export default function SampleShowcase() {
  return (
    <div className="show-case">
      <div className="showcase-heading">
        <div>
          <h2>Mens Trending Products</h2>
          <p>our most trending products for men.</p>
        </div>
        <div>
          <a href="/shopping/clothings">Show All Products</a>
        </div>
      </div>
      <LeftNav />
      <div className="main-showcase">
        {productData.clothings.map(({ id, name, url, price }) => (
          <div
            className="card"
            key={id}
            style={{ backgroundImage: `url(${url})` }}
          >
            <div className="product-info">
              <h2>{name}</h2>
              <p>${price}.00</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
